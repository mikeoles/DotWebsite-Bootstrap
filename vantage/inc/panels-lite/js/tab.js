jQuery(function($){
    // This is the part where we move the panels box into a tab of the content editor

    var displayPageBuilderModal = function(){

        var modal = $('#siteorigin-panels-install-modal');
        if(modal.length === 0) {
            var modelCode = '<div id="siteorigin-panels-install-modal" class="panels-loading">' +
                '<div id="siteorigin-panels-install-window">' +
                '</div>' +
                '<div id="siteorigin-panels-install-toolbar">' +
                '<a href="#install" class="button-primary button-install">' + panelsLiteTeaser.buttons.install + '</a>' +
                '<a href="#" class="button-cancel">' + panelsLiteTeaser.buttons.cancel + '</a>' +
                '</div>' +
                '<div id="siteorigin-panels-install-overlay"></div>' +
                '</div>';

            modal = $(modelCode).appendTo('body');

            $.get(
                panelsLiteTeaser.contentUrl,
                function(html){
                    modal.removeClass('panels-loading').find('#siteorigin-panels-install-window').html(html);
                    modal.find('.button-cancel, #siteorigin-panels-install-overlay').click(function(e){
                        e.preventDefault();
                        modal.hide();
                        $('body').css('overflow', 'auto');
                    });

                    modal.find('a[href="#install"]').attr({
                        'href': panelsLiteTeaser.installUrl,
                        'target' : '_blank'
                    }).click(function(){
                        displayPageBuilderMessage();
                        modal.hide();
                        $('body').css('overflow', 'auto');
                    });
                }
            );
        }

        $('body').css('overflow', 'hidden');
        modal.show();
    };

    var displayPageBuilderMessage = function(){
        $('form[name=post]').before('<div id="message" class="updated below-h2"><p>' + panelsLiteTeaser.message + '</p></div>');
    };

    $( '#wp-content-editor-tools .wp-editor-tabs' )
        .append(
        $( '<a id="content-panels" target="_blank" class="hide-if-no-js wp-switch-editor switch-panels"></a>' )
            .html( panelsLiteTeaser.tab )
            .attr( 'href', panelsLiteTeaser.installUrl )
            .css( 'text-decoration', 'none' )
            .click( function (e) {
                e.preventDefault();
                displayPageBuilderModal();
            } )
    );
});