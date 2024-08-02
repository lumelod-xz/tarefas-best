using Microsoft.AspNetCore.Mvc;
using ViaCep;

[ApiController]
[Route("api/[controller]")]
public class CepController : ControllerBase
{
    private readonly HttpClient _httpClient;

    public CepController(HttpClient httpClient)
    {
        _httpClient = httpClient;
    }

    [HttpGet("{cep}")]
    public async Task<ActionResult<Endereco>> GetEndereco(string cep)
    {
        var endereco = await _httpClient.GetFromJsonAsync<Endereco>($"https://viacep.com.br/ws/{cep}/json/");

        if (endereco == null)
        {
            return NotFound("Endereço não encontrado.");
        }

        return Ok(endereco);
    }
}

