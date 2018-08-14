
// 点赞
function good_count(el1, el2)
{
	if (arguments.length == 1)
	{
		index_votes(el1);
	}
	else
	{
		article_good(el1);
		article_good(el2);
	}
}
function index_votes(el)
{
	$(el).on('click', function ()
	{
		var count = parseInt($(this).find('.votes-count').attr('value'));

		if (!$(this).find('.icon-good').hasClass('active'))
		{
			count++;
			$(this).find('.votes-count').removeClass('hide').html('x ' + count);
			$(this).find('.icon-good').addClass('active');
		}
		else
		{
			count--;
			$(this).find('.votes-count').removeClass('hide').html('x ' + count);
			$(this).find('.icon-good').removeClass('active');
		}
		$(this).find('.votes-count').attr('value', count);
	});
}
function article_good(el) 
{
	$(el).click(function()
	{
		var count = $('.article-good .count').html();
		$('.article-good').toggleClass('active');
		$('.votes-operation-bar .icon-good').toggleClass('active');
		if ($('.article-good').hasClass('active'))
		{
			count++;
			$('.article-good').find('.votes').text('已赞');
		}
		else
		{
			count--;
			$('.article-good').find('.votes').text('赞');
		}
		$('.article-good .count, .votes-operation-bar .votes-count').html(count);
	})
}

// mark
function mark_click(el)
{
	$(document).on('click', el, function()
	{
		if ($(this).find('input').is(':checked'))
		{
			$(this).find('input')[0].checked = false;
		}
		else
		{
			$(this).find('input')[0].checked = true;
		}
	})
}

// 首页轮播图 slideShow(按钮)  true 有按钮
function slideShow(dot)
{
	var item_len =  $('.carousel-wrapper-item').length,
		dot_arr = [],
		ad_index = 0,
		bool = true;

	_init(dot);
	function _init(dot)
	{
		$('.carousel-wrapper-item').eq(0).addClass('active');
		if (dot == true) _dot();
		setInterval(interval_move, 2000);
	}

	function _dot()
	{
		for(var i = 0; i < item_len; i++)
		{
			if (i == 0)
			{
				dot_arr[i] = '<li class="carousel-dot active"></li>';
			}
			else
			{
				dot_arr.push('<li class="carousel-dot"></li>');
			}
		}
		$('<ol class="carousel-dot-list"></ol>').appendTo($('.carousel-wrapper')).html(dot_arr.join(''));

		// dot 操作
		$('.carousel-dot').click(function()
		{
			var dot_click = $(this).index();

			$(this).addClass('active').siblings().removeClass('active')
			if (dot_click > ad_index)
			{
				$('.carousel-wrapper-item').eq(ad_index).addClass('right');
				$('.carousel-wrapper-item').eq(dot_click).addClass('next right');
			}
			else if (dot_click < ad_index)
			{
				$('.carousel-wrapper-item').eq(ad_index).addClass('left');
				$('.carousel-wrapper-item').eq(dot_click).addClass('prev');

				if ($('.carousel-wrapper-item.prev'))
				{
					setTimeout(function()
					{
						$('.carousel-wrapper-item.prev').addClass('left');
					},);
				}
			}
			ad_index = dot_click;
			clear_class();
		})
	}

	function interval_move()
	{
		$('.carousel-wrapper').mouseenter(function()
		{
			bool = false;
		}).mouseleave(function()
		{
			bool = true;
		});

		if (bool)
		{
			$('.carousel-wrapper-item').eq(ad_index).addClass('right');
			$('.carousel-wrapper-item').eq(ad_index + 1).addClass('next right');

			clear_class();

			ad_index++;

			$('.carousel-dot').eq(ad_index).addClass('active').siblings().removeClass('active');

			if (ad_index > 3)
			{
				ad_index = 0;
				$('.carousel-wrapper-item').eq(ad_index).addClass('next right');
				$('.carousel-dot').eq(ad_index).addClass('active').siblings().removeClass('active');
			}
		}
	}

	function clear_class()
	{
		setTimeout(function()
		{
			$('.carousel-wrapper-item.active.right').attr('class', 'carousel-wrapper-item');
			$('.carousel-wrapper-item.active.left').attr('class', 'carousel-wrapper-item');
			$('.carousel-wrapper-item.next.right').attr('class', 'carousel-wrapper-item active');
			$('.carousel-wrapper-item.prev.left').attr('class', 'carousel-wrapper-item active');
		},500);
	}
}

// 小轮播图
function carouse__content(el, item, button_left, button_right)
{

	var box_width = $(item).outerWidth(true);
		index = 2;

	carouse__right(el, item, button_left, button_right);

	function carouse__right(el, item , button_left,button_right)
	{
		setInterval(function ()
		{
			index++;
			$(el).animate({left:index * -box_width+ 'px'}, 500, animate__right);
		},5000);

		$(button_left).click(function()
		{
			index--;
			$(el).animate({left:index * -box_width+ 'px'}, 500, animate__right)
		});

		$(button_right).click(function()
		{
			index++
			$(el).animate({left:index * -box_width+ 'px'}, 500, animate__right)
		});
	}

	function animate__right()
	{
		if (index > 4)
		{
			index = 2;
			$(this).attr('style', 'left: ' + index * -box_width + 'px');
		}
		else if (index == 1)
		{
			index = 4;
			$(this).attr('style', 'left: ' + index * -box_width + 'px');
		}
	}
}

// 弹窗
function login_alerthandle(el, temp)
{
	$(el).on('click', function ()
	{
		$(temp).appendTo($('body'));
		$('body').addClass('hiddenScroll');
	});

	$(document).on('click', '.clear', function ()
	{
		$(this).parents('.mask').remove();
		$('body').removeClass('hiddenScroll');
	});
}

// 搜索框焦点
function search_click(el)
{
	$('.header-search ' + el).on('focus', function ()
	{
		$(this).parents('.header-search').animate({'width': '660px'},200);
	});
	$('.header-search ' + el).on('blur', function ()
	{
		$(this).parents('.header-search').animate({'width': '265px'},200);
	});
}

// 下拉菜单click
function dropdown_click(el, target, parent)
{
	$(el).on('click', function ()
	{
		if ($(target).hasClass('hide'))
		{
			$(target).removeClass('hide');
		}
		else
		{
			$(target).addClass('hide');
		}
	});
	$(el).on('blur', function ()
	{
		$(target).addClass('hide');
	});
	$(parent).on('blur', function ()
	{
		$(target).addClass('hide');
	});
}

// 下拉菜单hover
function dropdown_hover(parent, el, target)
{
	dropdown_enter(parent, el, target);
	dropdown_leave(target);
}

function dropdown_enter(parent, el, target)
{
	$(parent + ' ' + el).on('mouseenter', function ()
	{
		if ($(target).hasClass('hide'))
		{
			$(target).removeClass('hide');
		}
	});

	$(parent + ' ' + el).on('mouseleave', function ()
	{
		var timeout = setTimeout(function ()
		{
			$(target).addClass('hide');
		},500);

		$(el).on('mouseenter',function ()
		{
			clearTimeout(timeout);
		});

		$(target).on('mouseenter',function ()
		{
			clearTimeout(timeout);
		});
	});
}

function dropdown_leave(el)
{
	$(el).on('mouseleave', function ()
	{
		var timeout = setTimeout(function ()
		{
			$(el).addClass('hide');
		},500);

		$(el).on('mouseenter',function ()
		{
			clearTimeout(timeout);
		});
	});
}


function menu_move()
{
	var title_len = ($('.article-content h1').length) + ($('.article-content h2').length),
	article_header = [],
	article_title = [],
	count = 0,
	position_control = {
		footer_top: $('.sf-footer').offset().top,
		menu_top: $('.article-menu').offset().top - 10
	};

	for (var i = 0; i < title_len; i++)
	{
		article_title.push('<li><a href="#articleHeader' + i + '">' + $('#articleHeader' + i).html() + '</a></li>');

		article_header.push($('#articleHeader' + i).offset().top);
	}
	// 渲染
	$('<ul></ul>').appendTo('.article-menu').append(article_title.join('')).append('<div class="highlight-title"></div>');
	
	// 点击效果
	$('.article-menu ul li a').click(article_click);

	$(document).scroll(function()
	{	
		if (article_header[0] > $(document).scrollTop())
		{
			count = 0;
			animates(count);
		}
		else if (article_header[count] < $(document).scrollTop())
		{
			animates(count);
			count ++;
		}
		else if (article_header[count - 1] > $(document).scrollTop())
		{
			count --;
			animates(count);
		}
		position_move();
	})
	
	function animates(count)
	{
		$('.article-menu ul li').eq(count).addClass('active').siblings().removeClass('active');
		$('.highlight-title').animate({
			'height': $('.article-menu ul li').eq(count).outerHeight(true),
			'top': $('.article-menu ul li').eq(count).position().top
		},100);
	}

	function position_move()
	{
		if (position_control.footer_top - 900 < $(document).scrollTop())
		{
			$('.article-menu').attr('style', 'position: relative');
			$('.advert-flxed').attr('style', 'position: static;');
			$('.advert').attr('style', 'margin-top: 0;');
		}
		else
		{
			if (position_control.menu_top < $(document).scrollTop())
			{
				$('.article-menu').attr('style', 'position: fixed');
			}
			else
			{
				$('.article-menu').attr('style', 'position: relative');
			}

			if($(document).scrollTop() > 390)
			{
				$('.advert-flxed').attr('style', 'position: fixed');
				$('.advert').attr('style', 'margin-top: 105px;');
			}
			else
			{
				$('.advert-flxed').attr('style', 'position: static;');
				$('.advert').attr('style', 'margin-top: 0;');
			}
		}
	}

	// 标题背景移动
	function article_click()
	{
		count = $(this).parents('li').index();

		var div_height = $(this).outerHeight(true);
		var div_top = $(this).position().top;

		$('.highlight-title').animate({
			'height': div_height,
			'top': div_top
		},500);

		$(this).parents('li').addClass('active').siblings().removeClass('active');
	}
}
