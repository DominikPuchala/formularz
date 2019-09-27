$(function(){
    //tabelka "Alergeny i nietolerancje pokarmowe"
    $('.button-allergen').click(function(e) {
        const button = e.target;
        const parent = button.parentNode;
        const brother = $(button).siblings('p');
        const $list = $(parent).next('ul');

            $($list).slideToggle(400, function() {
                const classList = $($list).attr("class").split(/\s+/);
                $(this).is(':visible')?$(button).css('transform', 'rotate(180deg)'):$(button).css('transform', 'rotate(0deg)');
    
                if(classList.includes('list-third-level')) {
                    $(brother).toggleClass('active');
                    $($list).children().toggleClass('active');
                }
                else {
                    $(brother).toggleClass('active');
                    $($list).prev('li').toggleClass('active');
                }
            });
    })

    $('.list-main li .flex-container').click(function(e) {
        const $button = $(e.target).children('img');
        const $p = $($button).siblings('p');
        const $list = $(e.target).siblings('ul');

        $($list).slideToggle(400, function() {
            const classList = $($list).attr("class").split(/\s+/);
            $(this).is(':visible')?$($button).css('transform', 'rotate(180deg)'):$($button).css('transform', 'rotate(0deg)');
            
            if(classList.includes('list-third-level')) {
                $($p).toggleClass('active');
                $($list).children().toggleClass('active');
                $($list).prev('li').toggleClass('active');
            }
            else {
                $($p).toggleClass('active');
                $($list).prev('li').toggleClass('active');
            }
        }); 

    })

    //checkboxy z tabelki "Alergeny i nietolerancje pokarmowe"
    $('.button-checkbox').click(function(e) {
        const button = e.target;
        const $buttonSibling = $(button).siblings();
        $(button).css('display','none');
        $($buttonSibling).css('display', 'block');
    })
    //zwijanie sekcji i rozwijanie
    $('.toggle-content-button').click(function() {
        const $button = this;
        const $parent = $(this).parents('.section-header');
        const $content = $($parent).siblings('.content');
        $($content).stop().slideToggle(function() {
        });
        $($button).toggleClass('active');
    })
    //nawigacja (fixed) z prawej strony
    $(document).on('scroll', function() {
        const pagePosition = $(window).scrollTop();
        const $footer = $('.footer');
        if(pagePosition >= $($footer).offset().top-(($footer).outerHeight(true)+240)) {
            $('.container--aside').css({
                position: 'absolute',
                top: ($footer.offset().top-410)+'px'
            })
        }
        else {
            $('.container--aside').css({
                position: 'fixed',
                top: '418px'
            })
        }
    }).trigger('scroll');

    //menu na mniejszych ekranach
    var isHamburgerClosed = true;
    
    $('.button--hamburger').click(function() {

        $bar1 = $(this).children('.bar1');
        $bar2 = $(this).children('.bar2');
        $bar3 = $(this).children('.bar3');

        if(isHamburgerClosed) {
            $bar1.animate({
                top:'50%'
            }, {duration: 200, queue: false});
    
            $bar3.animate({
                top:'50%'
            }, {duration: 200, queue: false});
    
            $bar2.animate({
                opacity:'0',
            }, {duration: 50, queue: true});
    
            setTimeout(function() {
                $bar1.css('transform', 'rotate(45deg)');
                $bar3.css('transform', 'rotate(-45deg)');
            }, 150);

            $('.site-nav-list').css('display','flex');
        }
        else {

            $bar1.css('transform', 'rotate(0deg)');
            $bar3.css('transform', 'rotate(0deg)');
    
            setTimeout(function() {
                $bar1.animate({
                    top:'0'
                }, {duration: 200, queue: false});
        
                $bar3.animate({
                    top:'16px'
                }, {duration: 200, queue: false});
        
                $bar2.animate({
                    opacity:'1',
                }, {duration: 50, queue: true});
            }, 150);

            $('.site-nav-list').css('display','none');
        }

        isHamburgerClosed=!isHamburgerClosed;
        
    })

    //boczne menu przy mniejszych ekranach
    var isAsideMenuClosed = true;

    $('.aside-toggle-button').click(function() {

        let $container = $('.container--aside');

        if(isAsideMenuClosed) {
            $container.css('right','0')
            $('.aside-toggle-button').css('transform', 'translateY(-50%) rotate(180deg)')
        }
        else
        {
            $container.css('right','-173px')
            $('.aside-toggle-button').css('transform', 'translateY(-50%) rotate(0)')
        }

        isAsideMenuClosed=!isAsideMenuClosed;
    
    })

})