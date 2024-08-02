using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using LojaBest.Data;
using LojaBest.Models;

namespace LojaBest.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        private readonly AppDbContext _context;

        public ProductsController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/Products
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Produto>>> GetProdutos()
        {
            return await _context.Produtos.ToListAsync();
        }

        // GET: api/Products/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Produto>> GetProduto(int id)
        {
            var produto = await _context.Produtos.FindAsync(id);

            if (produto == null)
            {
                return NotFound();
            }

            return produto;
        }

        // POST: api/Products
        [HttpPost]
        public async Task<ActionResult<Produto>> PostProduto([FromBody] Produto produto)
        {
            var existingProduct = await _context.Produtos.FindAsync(produto.Id);
            if (existingProduct != null)
            {
                return Ok(existingProduct);
            }

            _context.Produtos.Add(produto);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetProduto), new { id = produto.Id }, produto);
        }

        private bool ProdutoExixtente(int id)
        {
            return _context.Produtos.Any(e => e.Id == id);
        }
    }
}
