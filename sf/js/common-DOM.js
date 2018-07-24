$(function ()
{
	dropdown_hover('.menu-item-more', '.dropdown-toggle', '.dropdown-block');
	dropdown_hover('.opts-item', '.user', '.dropdown-user-menu');
	dropdown_click('.btn-grunp .dropdown-toggle', '.dropdown-menu');
	dropdown_click('.icon-message', '.dropdown-message', '.opts-item-message');
	dropdown_click('.icon-mail', '.dropdown-mail', '.opts-item-mail');
	good_count('.votes-operation');
	
	login_alerthandle('.sf-login', sf_login);
	login_alerthandle('.sf-register', sf_register);
	login_alerthandle('.votes-operation-bar .icon-flag', sf_mark);
	login_alerthandle('.article-mark', sf_mark);

	search_click('.form-control');

	mark_click('.mark-file');

	// backtop
	$(window).scroll(function ()
	{
		$(window).scrollTop() > 725 ? $('.fixed-tools').removeClass('hide') : $('.fixed-tools').addClass('hide');
	})

	$('#backtop').on('click', function ()
	{
		$('html').animate({
	        scrollTop: 0
	    }, 200);
	});

	// 页尾二维码
	$('.sf-footer .icon-sn-weixin').on('mouseenter', function ()
	{
		$('.sf-popover').removeClass('hide');
	});
	$('.sf-footer .icon-sn-weixin').on('mouseleave', function ()
	{
		$('.sf-popover').addClass('hide');
	});

	$('.dropdown-message .tabs-nav').find('li').on('click', function (index)
	{
		$(this).addClass('active').siblings().removeClass('active');
		$('.dropdown-panel-content .tab-pane').eq($(this).index()).addClass('active').siblings().removeClass('active');
	});

	if ($('.news-list-item .news-img'))
	{
		$('.news-list-item .news-img').parent('.news-list-item').find('.content').css('width', '83%');
	}

	$('.set-option').on('click', function ()
	{

		$(this).parents('.feed-option-show').addClass('hide');
		$('.feed-option-set').removeClass('hide');
	})

	$('.feed-option-set .cancel').on('click', function()
	{
		$(this).parents('.feed-option-set').addClass('hide');
		$('.feed-option-show').removeClass('hide');
	})

	$('.news-list-footer .btn').on('click', function ()
	{
		$(this).text('加载中');
		setTimeout(function ()
		{
			$('.news-list-footer .btn').text('点击载入更多');
		},1000);
	})

	$('.new-content').on('click', function ()
	{
		$(this).addClass('hide')
	})
})