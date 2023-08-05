tinymce.init({
    selector:'#sewar',
    menubar: false,
    statusbar: false,
    plugins: 'autoresize anchor autolink charmap code codesample directionality fullpage help hr image imagetools insertdatetime link lists media nonbreaking pagebreak preview print searchreplace table template textpattern toc visualblocks visualchars',
    toolbar: 'h1 h2 bold italic strikethrough blockquote bullist numlist backcolor | link image media | removeformat help fullscreen ',
    skin: 'bootstrap',
    toolbar_drawer: 'floating',
    min_height: 200,           
    autoresize_bottom_margin: 16,
    setup: (editor) => {
        editor.on('init', () => {
            editor.getContainer().style.transition="border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out"
        });
        editor.on('focus', () => {
            editor.getContainer().style.boxShadow="0 0 0 .2rem rgba(0, 123, 255, .25)",
            editor.getContainer().style.borderColor="#80bdff"
        });
        editor.on('blur', () => {
            editor.getContainer().style.boxShadow="",
            editor.getContainer().style.borderColor=""
        });
    },
    
});



  tinymce.init({
    selector: "#dragulaModalCenter-model",
    height: 200,
    menubar: false,
    statusbar: false,
    skin: 'bootstrap',
    plugins: [
      "advlist autolink advcode lists link image charmap print preview anchor",
      "searchreplace visualblocks code fullscreen",
      "insertdatetime media table paste emoticons",
      'emoticons image imagetools',
    ],
    toolbar:
      "styleselect | bold italic underline | alignleft alignright | link | emoticons",
    formats: {
        custom_paragraph: { block: 'p', title: 'فقرة', icon: 'paragraph' }
      },
  });
  
 