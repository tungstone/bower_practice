$(document).ready(function(){

	//GNB 더보기 메뉴 열기 및 닫기
	$('.gnb .li_type7').on('click',function(){
		$(".gnb_more").slideToggle(100);
		return false;
	});
	$('.close > button').on('focusout',function(){
		$('.gnb_more').slideUp(100);
	});
	
	//인기검색어 mouseover/mouseleave시 순위 리스트 열림,닫힘
	$('.interest > a, .interest > ol').on('mouseover mouseleave',function(event){
		$(this).parent().removeClass('on');

		if(event.type === 'mouseover'){
			$(this).parent().addClass('on');
		} else if(event.type === 'mouseleave') {
		}
	});
	
	
	//인기검색어 항목에서 tab을 누르면 list가 나옴
	$('.interest > a').on('keyup',function(e){
		if(e.shiftKey == false && e.keyCode == 9){
			$('.interest').addClass('on');
			$('.interest_lst > li > a:first').focus();
		}else if(e.shiftKey == true && e.keyCode == 9){
			$('.interest').removeClass('on');
			$('.interest > a').focus();
		};
	});
		
	//인기검색어 list 마지막 항목에서 focusout 될 시 list 사라짐
	$('.interest_lst > li:last-child').on('focusout',function(){
		$('.interest').removeClass('on');
		$('tv_info').focus();
	});
	
	//highlight부분 리스트 토글
	$('.high_date > a').on('click',function(){
		$('.high_lst').removeClass('on');
		$(this).parent().next().addClass('on');
		return false;
	});
	
	//다시보기 날짜 클릭시 해당 리스트 열림.닫힘
	$('.review_date > li > a').on('focusin',function(){
		$('.date_li').removeClass('on');
		$(this).parent().addClass('on');
		return false;
	});
	
	//Program Now 부분 각 text별 img 바꾸기 - mouseover
	$('.now_poster, .now_poster2, .now_poster3').hide();
	$('.now_poster').show();
	$('.now_li').on('mouseover',function(){
		$('.now_poster2, .now_poster3').hide();
		$('.now_poster').show();
	});
	$('.now_li2').on('mouseover',function(){
		$('.now_poster, .now_poster3').hide();
		$('.now_poster2').show();
	});
	$('.now_li3').on('mouseover',function(){
		$('.now_poster, .now_poster2').hide();
		$('.now_poster3').show();
	});
	
	//Program Now 부분 각 text별 img 바꾸기 - focusin
	$('.now_li').on('focusin',function(){
		$('.now_poster2, .now_poster3').hide();
		$('.now_poster').show();
	});
	$('.now_li2').on('focusin',function(){
		$('.now_poster, .now_poster3').hide();
		$('.now_poster2').show();
	});
	$('.now_li3').on('focusin',function(){
		$('.now_poster, .now_poster2').hide();
		$('.now_poster3').show();
	});
	
	//Program Now 부분 마지막 text에서 focusout 될 경우 첫번째 이미지 표시
	$('.now_li3').on('focusout',function(){
		$('.now_poster2, .now_poster3').hide();
		$('.now_poster').show();
	});
	
	//Footer의 MBC와함께/계열사 및 자회사
	$('.ft_lnk').on('click',function(){
		$('.coper').removeClass('on');
		$('.with_mbc').toggleClass('on');
		return false;
	});
	$('.ft_lnk2').on('click',function(){
		$('.with_mbc').removeClass('on');
		$('.coper').toggleClass('on');
		return false;
	});
	$('.ft_lst2 .ft_li4 a:last-child').on('focusout',function(){
		$('.with_mbc').removeClass('on');
	});
	$('.ft_lst3 .ft_li4 a:last-child').on('focusout',function(){
		$('.coper').removeClass('on');
		$('.icon_twiter').focus();
	});
});