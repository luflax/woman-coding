using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace ADSUna.LAI.Portal.Web.Models
{
    [Table("CommunityPost")]
    public class CommunityPost
    {
        [Key]
        public string PostId { get; set; }
        public DateTime PostCreatedDate { get; set; }
        public string PostTitle { get; set; }
        public string PostContent { get; set; }
        public string UserId { get; set; }
        [ForeignKey("UserId")]
        public virtual ApplicationUser PostedBy { get; set; }

        public CommunityPost()
        {

        }

    }
}
