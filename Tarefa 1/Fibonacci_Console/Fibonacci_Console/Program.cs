namespace FibonacciConsoleApp
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Validation Fibonacci");
            Console.WriteLine("Digite um número inteiro n para calcular a sequência de Fibonacci:");
            int n = int.Parse(Console.ReadLine());

            long NumeroFibonacci = Fibonacci(n);
            Console.WriteLine($"O {n}-ésimo número da sequência de Fibonacci é: {NumeroFibonacci}");
        }

        static long Fibonacci(int numero)
        {
            if (numero == 0) return 0;
            if (numero == 1) return 1;

            long[] fib = new long[numero + 1];
            fib[0] = 0;
            fib[1] = 1;

            for (int i = 2; i <= numero; i++)
            {
                fib[i] = fib[i - 1] + fib[i - 2];
            }

            return fib[numero];
        }
    }
}
