using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ADSUna.LAI.Portal.Web.Layout.Models;
using ADSUna.LAI.Portal.Web.Layout.Data;

namespace ADSUna.LAI.Portal.Web.Layout.Controllers
{
    [Route("api/[controller]")]
    //[ApiController]
    public class MenuController : Controller
    {
        private readonly DBAccessContext _context;

        public MenuController(DBAccessContext context)
        {
            _context = context;
        }

        // GET: api/Menu
        [HttpGet("[action]")]
        public IEnumerable<Menu> GetMenu()
        {
            return _context.MenuSet;
        }

        // GET: api/Menu/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetMenu([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var Menu = await _context.MenuSet.FindAsync(id);

            if (Menu == null)
            {
                return NotFound();
            }

            return Ok(Menu);
        }

        // PUT: api/Menu/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutMenu([FromRoute] int id, [FromBody] Menu Menu)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != Menu.IdMenu)
            {
                return BadRequest();
            }

            _context.Entry(Menu).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!MenuExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Menu
        [HttpPost]
        public async Task<IActionResult> PostMenu([FromBody] Menu Menu)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.MenuSet.Add(Menu);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetMenu", new { id = Menu.IdMenu }, Menu);
        }

        // DELETE: api/Menu/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteMenu([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var Menu = await _context.MenuSet.FindAsync(id);
            if (Menu == null)
            {
                return NotFound();
            }

            _context.MenuSet.Remove(Menu);
            await _context.SaveChangesAsync();

            return Ok(Menu);
        }

        private bool MenuExists(int id)
        {
            return _context.MenuSet.Any(e => e.IdMenu == id);
        }
    }
}