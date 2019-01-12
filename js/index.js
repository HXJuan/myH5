
function displaysubMenu(li)
{
var subMenu=li.getElementsByTagName("ul")[0]; //到DOM树中li下面的的第一个ul标签
subMenu.style.display = "block"; //把它属性显示
	}
	function hidesubMenu(li) { 
var subMenu = li.getElementsByTagName("ul")[0]; 
subMenu.style.display = "none"; 
}

$(function() {
		$("#slider").easySlider( {
			slideSpeed: 500,
			paginationSpacing: "15px",
			paginationDiameter: "12px",
			paginationPositionFromBottom: "20px",
			slidesClass: ".slides",
			controlsClass: ".controls",
			paginationClass: ".pagination"					
		});
	});