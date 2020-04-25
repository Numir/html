//Çeşit1
var quillS = new Quill('#editor', {
    theme: 'snow'
});

quillS.formatLine(1, 4, 'align', 'center'); // center aligns both lines
quillS.formatText(0, 11, {
    'bold': true,
    'color': 'rgb(0, 0, 255)'
});

quillS.formatText(0, 7, 'bold', true);
quillS.formatText(0, 7, 'color', 'red');
quillS.formatText(8, 6, 'italic', true);
quillS.formatText(8, 4, 'color', 'blue');


//Çeşit2
var quill = new Quill('#editor-quill', {
    modules: {
        toolbar: [
            [{ header: [1, 2, 3, false] }],
            ['bold', 'italic', 'underline'],
            ['image', 'code-block'],
        ]
    },
    placeholder: 'Compose an epic...',
    theme: 'snow' // or 'bubble'
});
quill.setText('Süleyman\nQuill \nAnlatımı\n');
quill.formatText(0, 6, 'heading 1', true);
quill.formatText(7, 4, 'color', 'blue');
quill.formatText(0, 2, 'color', 'red');
quill.formatLine(0, 1, 'align', 'right');
quill.formatLine(9, 1, 'align', 'center');
//quill.getFormat();
quill.focus();

//,'link'
//[{ 'font': [] }],