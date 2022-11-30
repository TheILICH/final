let N = 1e9;

for (let i = 1; i * i <= N; ++i)
{
    console.log(`i = ${i}`);
}

const F = (id) =>
{
    document.getElementById(id).innerText = "abcdefghijklmnop";
}