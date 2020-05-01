//Çeşitlemece 1
var quillS = new Quill('#editor', {
    theme: 'snow'
});

quillS.formatLine(1, 1, 'align', 'center');
quillS.formatText(0, 11, {
    'bold': true,
    'color': 'rgb(255,0 ,0)'
});
quillS.formatText(0, 7, 'color', 'red');
quillS.formatText(8, 4, 'italic', true);
quillS.formatText(8, 6, 'color', 'blue');


//Çeşitlemece 2
var quill = new Quill('#editor-quill', {
    modules: {
        toolbar: [
            [{ header: [1, 2, 3, false] }],
            ['bold', 'italic', 'underline'],
            ['image', 'code-block', 'link'], //,'link'
            [{ 'font': [] }]
        ]
    },
    placeholder: 'Mesajınız Nedir??...',
    theme: 'snow' // or 'bubble'
});
quill.setText('Süleyman\nQuill \nAnlatımı\n');
quill.formatText(0, 2, 'color', 'red');
quill.formatText(7, 4, 'color', 'blue');
quill.formatLine(0, 1, 'align', 'right');
quill.formatLine(9, 1, 'align', 'center');
quill.focus();

//https://cdnjs.com/libraries/quill