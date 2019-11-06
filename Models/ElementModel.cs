using system;

namespace Lab_17.Models
{  
    public class ElementModel
    {
        public string Simbolo { get; set; }
        public string Nombre { get; set; }
        public int NumeroAtomico { get; set; }
        public string Clasificacion { get; set; }
        public int ElectronesDeValecia { get; set; }
        public string Color { get; set; }

        public ElementModel(string simbolo, string nombre, int numeroAtomico, string clasificacion, int electronesDeValecia, string color)
        {
            this.Simbolo = simbolo;
            this.Nombre = nombre;
            this.NumeroAtomico = numeroAtomico;
            this.Clasificacion = clasificacion;
            this.ElectronesDeValecia = electronesDeValecia;
            this.Color = color;
        }

    }
    
}