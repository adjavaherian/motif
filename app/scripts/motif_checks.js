;(function($, window, document, undefined){
    $.widget('ui.motif_checks', {
        options: {
            class: '',
            rows: [],
            cols: []
        },

        _init: function(){
            console.log('appending to: %O', this.element);
        },

        _create: function(){
            var that = this,
                target = this.element,
                rows = that.options.rows,
                cols = that.options.cols,
                tbl = document.createElement('table');

            tbl.className = 'motif_checks ' + that.options.class;
            tbl.style.width='100%';
            tbl.style.border = "1px solid black";

            for(var i = 0; i < rows.length; i++){
                var tr = tbl.insertRow();
                for(var j = 0; j <= cols.length; j++){
                    if(j === 0){
                        var td = tr.insertCell();
                        td.appendChild(document.createTextNode(rows[i]));
                        td.style.border = "1px solid black";
                    } else {
                        var td = tr.insertCell();
                        var checkbox = document.createElement('input');
                        checkbox.type = "checkbox";
                        checkbox.addEventListener('click', checkClick, true);
                        td.appendChild(document.createTextNode(cols[j-1]));
                        td.appendChild(checkbox);
                        td.style.border = "1px solid black";
                        if(j === 1){
                            checkbox.checked = true;
                        }
                    }
                }
            }

            var button = $('<button></button>', {
                html : 'Report',
                class: 'report-button'
            });
            button.on('click', reportLevel);

            that.element.html(tbl);
            that.element.append(button);

        }
    });
})(jQuery, window, document);

