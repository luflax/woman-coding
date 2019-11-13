using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace ADSUna.LAI.Portal.Web.Models
{
    [Table("CommunityPostLikes")]
    public class CommunityPostLikes
    {
        [Key]
        public string IdReaction { get; set; }
        public string PostId { get; set; }
        public DateTime ReactionDate { get; set; }
        public string UserId { get; set; }

        [ForeignKey("PostId")]
        public virtual CommunityPost Post { get; set; }
        [ForeignKey("UserId")]
        public virtual ApplicationUser LikedBy { get; set; }
        public CommunityPostLikes()
        {

        }
    }
}
