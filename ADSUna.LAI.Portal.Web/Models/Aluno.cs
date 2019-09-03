using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace ADSUna.LAI.Portal.Web.Models
{
    public class Aluno
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]//sera auto increment
        public int IdAluno { get; set; }
        public string RegistroAcademico { get; set; }
        public string Cpf { get; set; }
        public string Nome { get; set; }

    }
}
