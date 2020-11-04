
/* ----------------------------------------------------------- */
/*  xử lý phần khi load trang web
/* ----------------------------------------------------------- */
$(window).one("load", function () {
    
    /* xử lý 2 chiều giữa mảng và localStorage của chrome */
    let stringValueCart = "";
    let stringValueFavorite = "";
    let storageShoppingArr = localStorage.getItem("shoppingCartList");
    let shoppingCartList;
    let storageFavorite = localStorage.getItem("favoriteList");
    let favoriteList;
    if (storageShoppingArr) {
        shoppingCartList = JSON.parse(storageShoppingArr);
    }
    else {
        shoppingCartList = []
    }

    if (storageFavorite) {
        favoriteList = JSON.parse(storageFavorite);
    }
    else {
        favoriteList = []
    }
    function renderShowBoxCart(idBox, arr) {

        let stringValue = "";
        for (let value of arr) {
            stringValue += `<tr class="trBox">`;
            stringValue += `<td colspan="2"><i class="fa fa-times""></i><img src="${value.url}" alt=""/><h5>${value.name}</h5></td>`
            stringValue += `<td><p>${value.money}</p></td>`;
            stringValue += `<th><a href="#" class="page-addToCart" id="page-addToCart" name="${value.name}" value="${value.money}" src="${value.url}">Thêm vào giỏ hàng</a></th>`;
            stringValue += "</tr>";
        }
        $(`#${idBox}`).html(stringValue);
    }
    
    for (let value of shoppingCartList) {
        stringValueCart += `<div class="box-cart">`;
        stringValueCart += `<div class="box-cart-img"><img src="${value.url}" alt=""></div>`
        stringValueCart += `<div class="box-cart-text"><h5>${value.name}</h5><p>${value.money}</p></div>`;
        stringValueCart += "</div>";
    }
    for (let value of favoriteList) {
        stringValueFavorite += `<div class="box-cart">`;
        stringValueFavorite += `<div class="box-cart-img"><img src="${value.url}" alt=""></div>`
        stringValueFavorite += `<div class="box-cart-text"><h5>${value.name}</h5><p>${value.money}</p></div>`;
        stringValueFavorite += "</div>";
    }
    $("#box-shopping-cart").html(stringValueCart);
    $("#shoppingCart-tag").html(shoppingCartList.length);
    $("#box-favorite").html(stringValueFavorite);
    $("#favorite-tag").html(favoriteList.length);
    renderShowBoxCart("ndTable", JSON.parse(localStorage.getItem("favoriteList")));


});
$(document).ready(function (){


/* ----------------------------------------------------------- */
/*  xử lý phần thao tac header
/* ----------------------------------------------------------- */

    $(".header-shopping-card").hover(function () {
        $(this).find("#modal-cart").css("display", "block");
    }, function () {
        $(this).find("#modal-cart").css("display", "none");
    });

    $(window).scroll(function (event) {

        let vitri = Math.max($("html").scrollTop(), $("body").scrollTop());
        if (vitri > $("#hp-nav").offset().top) {
            $("#hp-header").addClass("headerFixed").one("webkitAnimationEnd", function () {
                $(".header-shopping-card i").addClass("alternateY");
            });
            $("#hp-header #header-nav").css({ "margin-top": "-11px" });
            $("#form-inline-top").hide();
        }
        else if (vitri == 0) {
            $("#hp-header").removeClass("headerFixed");
            $(".header-shopping-card i").removeClass("alternateY");
            $("#form-inline-top").show();
            $("#hp-header #header-nav").css({ "margin-top": "11px" });
        }
    })

/* ----------------------------------------------------------- */
/*  xử lý phần thao tac với các sản phẩm
/* ----------------------------------------------------------- */
    //Them san pham vao gio hang va danh muc yeu thich

    

    
    /* xử lý 2 chiều giữa mảng với localStorage chrome */
    let storageFavorite = localStorage.getItem("favoriteList");
    let favoriteList;
    let storageShoppingArr = localStorage.getItem("shoppingCartList");
    let shoppingCartList;
    if (storageFavorite) {
        favoriteList = JSON.parse(storageFavorite);
    }
    else {
        favoriteList = []
    }
    if (storageShoppingArr) {
        shoppingCartList = JSON.parse(storageShoppingArr);
    }
    else {
        shoppingCartList = []
    }

    function renderShowBoxCart(idBox, arr) {

        let stringValue = "";
        for (let value of arr) {
            stringValue += `<tr class="trBox">`;
            stringValue += `<td colspan="4"><i class="fa fa-times""></i><img src="${value.url}" alt=""/><h5>${value.name}</h5></td>`
            stringValue += `<td><p>${value.money}</p></td>`;
            stringValue += `<th><a href="#" class="page-addToCart" id="page-addToCart">Thêm vào giỏ hàng</a></th>`;
            stringValue += "</tr>";
        }
        $(`#${idBox}`).html(stringValue);
    }
    function renderBoxCart(idBox,idCount, arr) {

        let stringValue = "";
        for (let value of arr) {
            stringValue += `<div class="box-cart">`;
            stringValue += `<div class="box-cart-img"><img src="${value.url}" alt=""></div>`
            stringValue += `<div class="box-cart-text"><h5>${value.name}</h5><p>${value.money}</p></div>`;
            stringValue += "</div>";
        }
        $(`#${idBox}`).html(stringValue);
        $(`#${idCount}`).html(arr.length);
    }
    /* chức năng xóa sản phẩm khỏi danh mục yêu thích */
    $(".trBox").each(function () {
        $(this).click(function () {
            for (let value of favoriteList) {
                if ($(this).find("img").attr("src") == value.url) {
                    favoriteList.splice(favoriteList.indexOf(value), 1);
                    /* $(this).css("visibility", "hidden"); */
                    break;
                }
            }
            $(this).addClass("ansangtrai").one("webkitAnimationEnd", function(){
                $(this).remove();
            })
            localStorage.setItem("favoriteList", JSON.stringify(favoriteList));
            renderBoxCart("box-favorite","favorite-tag", favoriteList);
        })
    });

    $(".page-addToCart").click(function () {
        console.log("da click");
        shoppingCartList.push({ "name": $(this).attr("name"), "money": $(this).attr("value"), "url": $(this).attr("src") });
        localStorage.setItem("shoppingCartList", JSON.stringify(shoppingCartList));
        renderBoxCart("box-shopping-cart", "shoppingCart-tag", shoppingCartList);
    });

});