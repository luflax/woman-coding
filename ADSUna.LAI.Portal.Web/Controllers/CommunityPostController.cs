using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ADSUna.LAI.Portal.Web.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Authorization;

namespace ADSUna.LAI.Portal.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class CommunityPostController : ControllerBase
    {
        private readonly DBAccessContext _context;

        public CommunityPostController(DBAccessContext context)
        {
            _context = context;
        }

        // GET: api/CommunityPosts
        [HttpGet]
        public IEnumerable<CommunityPost> GetCommunityPostDbSet()
        {
            return _context.CommunityPostDbSet;
        }

        // GET: api/CommunityPosts/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetCommunityPost([FromRoute] string id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var communityPost = await _context.CommunityPostDbSet.FindAsync(id);

            if (communityPost == null)
            {
                return NotFound();
            }

            return Ok(communityPost);
        }

        // PUT: api/CommunityPosts/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCommunityPost([FromRoute] string id, [FromBody] CommunityPost communityPost)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != communityPost.PostId)
            {
                return BadRequest();
            }

            _context.Entry(communityPost).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CommunityPostExists(id))
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

        // POST: api/CommunityPosts
        [HttpPost]
        public async Task<IActionResult> PostCommunityPost([FromBody] CommunityPost communityPost)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.CommunityPostDbSet.Add(communityPost);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCommunityPost", new { id = communityPost.PostId }, communityPost);
        }

        // DELETE: api/CommunityPosts/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCommunityPost([FromRoute] string id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var communityPost = await _context.CommunityPostDbSet.FindAsync(id);
            if (communityPost == null)
            {
                return NotFound();
            }

            _context.CommunityPostDbSet.Remove(communityPost);
            await _context.SaveChangesAsync();

            return Ok(communityPost);
        }

        private bool CommunityPostExists(string id)
        {
            return _context.CommunityPostDbSet.Any(e => e.PostId == id);
        }
        [HttpPost("LikePost")]
        public async Task<IActionResult> LikePost([FromBody] CommunityPost communityPostLiked, [FromServices]SignInManager<ApplicationUser> signInManager)
        {
            var loggedUser = signInManager.Context.User.Claims.Where(c => c.Type.Equals("jti")).FirstOrDefault();

            CommunityPostLikes like = new CommunityPostLikes();
            like.PostId = communityPostLiked.PostId;
            like.ReactionDate = DateTime.Now;
            like.UserId = loggedUser != null ? loggedUser.Value : string.Empty;


            _context.CommunityPostLikesDbSet.Add(like);
            await _context.SaveChangesAsync();

            return Ok(like);
        }
    }
}