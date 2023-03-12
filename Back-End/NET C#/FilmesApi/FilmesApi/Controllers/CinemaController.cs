using AutoMapper;
using FilmesApi.Data;
using FilmesApi.Data.Dtos;
using FilmesApi.Models;
using Microsoft.AspNetCore.Mvc;

namespace FilmesApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CinemaController : ControllerBase
    {
        private FilmeContext _context;
        private IMapper _mapper;

        public CinemaController(FilmeContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        [HttpPost]
        public IActionResult AdcionarCinema([FromBody] CreateCinemaDto cinemaDto)
        {
            Cinema cinema = _mapper.Map<Cinema>(cinemaDto);
            _context.Add(cinema);
            _context.SaveChanges();

            return CreatedAtAction(nameof(RecuperarCinemasPorId), new { Id = cinema.Id}, cinemaDto);
        }

        [HttpPost("{id}")]
        public IActionResult RecuperarCinemasPorId(int id)
        {
            Cinema cinema = _context.Cinemas.FirstOrDefault(c => c.Id == id);
            if(cinema != null)
            {
                ReadCinemaDto cinemaDto = _mapper.Map<ReadCinemaDto>(cinema);
                return Ok(cinemaDto);
            }
            return NotFound();
        }

        [HttpGet]
        public IEnumerable<ReadCinemaDto> RecuperarCinemas()
        {
            return _mapper.Map<List<ReadCinemaDto>>(_context.Cinemas.ToList());
        }

        [HttpPut("{id}")]
        public IActionResult AtualizaCinema(int id, [FromBody] UpdateCinemaDto cinemaDto)
        {
            Cinema cinema = _context.Cinemas.FirstOrDefault(c => c.Id == id);
            if(cinema == null)
            {
                return NotFound();
            }
            else
            {
                _mapper.Map(cinemaDto, cinema);
                _context.SaveChanges();
                return NoContent();
            }
        }

        [HttpDelete("{id}")]
        public IActionResult DeletaCinema(int id)
        {
            Cinema cinema = _context.Cinemas.FirstOrDefault(c =>c.Id == id);
            if(cinema == null)
            {
                return NotFound();
            }
            else
            {
                _context.Remove(cinema);
                _context.SaveChanges();
                return NoContent();
            }
        }

    }
}
