using System.Buffers.Text;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TravelWeb01.Models
{
    public class Members
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        public string? MberName { get; set; }

        public required string MberAccount { get; set; }

        public required string MberPassword { get; set; }

        public required string MberEmail { get; set; }
        
        public string? MberPhone { get; set; }

        [DataType(DataType.Date)]
        public DateTime? MberBirthday { get; set; }

    }
}
