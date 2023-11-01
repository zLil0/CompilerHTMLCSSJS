let linesNumber = 1
let textLines
let linesList = ['<h3>1</h3>']

function autoSize(textarea) {
    textarea.style.height = 'auto';
    lines()
    if(textLines>linesNumber){
        linesNumber ++
        linesList.push(`<h3>${linesNumber}</h3>`)
        document.getElementById('lines').innerHTML = ''
        linesList.map((num) => {
            document.getElementById('lines').innerHTML += num
        })
    } else if(textLines<linesNumber){
        linesList.pop(`<h3>${linesNumber}</h3>`)
        linesNumber --
        document.getElementById('lines').innerHTML = ''
        linesList.map((num) => {
            document.getElementById('lines').innerHTML += num
        })
    }
    
}
function lines(){
    const textarea = document.getElementById('code');
    textarea.addEventListener('input', () => {
        const text = textarea.value;
        const lineCount = (text.match(/\n/g) || []).length + 1;
        textLines = lineCount
    });
}