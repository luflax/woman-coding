using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ADSUna.LAI.Portal.Web.Models;
using Microsoft.AspNetCore.Authorization;

namespace ADSUna.LAI.Portal.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize("Bearer")]
    public class AlunoController : Controller
    {
        private readonly DBAccessContext _context;

        public AlunoController(DBAccessContext context)
        {
            _context = context;
        }

        // GET: api/Aluno
        [HttpGet("[action]")]
        public IEnumerable<Aluno> GetAluno()
        {
            return _context.Aluno;
        }

        // GET: api/Aluno/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetAluno([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var aluno = await _context.Aluno.FindAsync(id);

            if (aluno == null)
            {
                return NotFound();
            }

            return Ok(aluno);
        }

        // PUT: api/Aluno/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutAluno([FromRoute] int id, [FromBody] Aluno aluno)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != aluno.IdAluno)
            {
                return BadRequest();
            }

            _context.Entry(aluno).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AlunoExists(id))
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

        // POST: api/Aluno
        [HttpPost]
        public async Task<IActionResult> PostAluno([FromBody] Aluno aluno)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.Aluno.Add(aluno);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetAluno", new { id = aluno.IdAluno }, aluno);
        }

        // DELETE: api/Aluno/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAluno([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var aluno = await _context.Aluno.FindAsync(id);
            if (aluno == null)
            {
                return NotFound();
            }

            _context.Aluno.Remove(aluno);
            await _context.SaveChangesAsync();

            return Ok(aluno);
        }

        private bool AlunoExists(int id)
        {
            return _context.Aluno.Any(e => e.IdAluno == id);
        }
    }
}