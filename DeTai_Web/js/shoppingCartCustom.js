/* ----------------------------------------------------------- */
/*  xử lý phần khi load trang web
/* ----------------------------------------------------------- */
$(window).one("load", function () {

    /* xử lý 2 chiều giữa mảng và localStorage của googleChorm cung cấp */
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
        shoppingCartList = [];
    }

    if (storageFavorite) {
        favoriteList = JSON.parse(storageFavorite);
    }
    else {
        favoriteList = [];
    }
    function renderShowBoxCart(idBox, arr) {

        let stringValue = "";
        for (let value of arr) {
            stringValue += `<tr class="trBox">`;
            stringValue += `<td class="tdBox" colspan="4"><i class="fa fa-times""></i><img src="${value.url}" alt=""/><h5>${value.name}</h5></td>`
            stringValue += `<td><p>${value.money}</p></td>`;
            stringValue += "</tr>";
        }
        $(`#${idBox}`).html(stringValue);
    }
    function totalCart(idBox, arr) {

        let result = arr.reduce(function (a, b) {
            return a + parseInt(b.money);
        }, 0);
        $(`#${idBox}`).html(`${result} VND`);
        
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
    renderShowBoxCart("ndTable", shoppingCartList);
    totalCart("subTotal", shoppingCartList);
    totalCart("totalCart", shoppingCartList);
    
    
});
$(document).ready(function () {

/* ----------------------------------------------------------- */
/*  xử lý phần thao tac với header
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
    });

/* ----------------------------------------------------------- */
/*  xử lý phần thao tac với các sản phẩm
/* ----------------------------------------------------------- */
    
    /* xử lý 2 chiều giữa mảng và localStorage của chorme */
    let storageShoppingArr = localStorage.getItem("shoppingCartList");
    let shoppingCartList;
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
            stringValue += `<td class="tdBox" colspan="4"><i class="fa fa-times""></i><img src="${value.url}" alt=""/><h5>${value.name}</h5></td>`
            stringValue += `<td><p>${value.money}</p></td>`;
            stringValue += "</tr>";
        }
        $(`#${idBox}`).html(stringValue);
    }

    /* chức năng tính tiền các sản phẩm */
    function totalCart(idBox, arr) {

        let result = arr.reduce(function (a, b) {
            return a + parseInt(b.money);
        }, 0);
        $(`#${idBox}`).html(result);
    }
    function renderBoxCart(){

        let stringValueCart = "";
        for (let value of shoppingCartList) {
            stringValueCart += `<div class="box-cart">`;
            stringValueCart += `<div class="box-cart-img"><img src="${value.url}" alt=""></div>`
            stringValueCart += `<div class="box-cart-text"><h5>${value.name}</h5><p>${value.money}</p></div>`;
            stringValueCart += "</div>";
        }
        $("#box-shopping-cart").html(stringValueCart);
        $("#shoppingCart-tag").html(shoppingCartList.length);
    }

    /* xoa san pham khoi giỏ hàng */
        $(".trBox").each(function () {
            $(this).click(function () {
                for (let value of shoppingCartList) {
                    if ($(this).find("img").attr("src") == value.url) {
                        shoppingCartList.splice(shoppingCartList.indexOf(value), 1);
                        break;
                    }
                }
                $(this).addClass("ansangtrai").one("webkitAnimationEnd", function(){
                    $(this).remove();
                })
                totalCart("subTotal", shoppingCartList);
                totalCart("totalCart", shoppingCartList);
                localStorage.setItem("shoppingCartList", JSON.stringify(shoppingCartList));
                renderBoxCart();
            })
        });
    let quantityProduct = 0;
    $(".input-value-quantity").each(function(event){
        $(this).change(function(){
            $(this).val("ok");
        })
    });
    let coupon = [
        { couponName : "HOANGPHUSHOP", valCoupon : 0.75},
        { couponName : "GIAMGIA50", valCoupon : 0.5},
        { couponName : "GIAMGIA25", valCoupon : 0.25}
    ];
    $("#couponCart").blur(function(){

        let result = shoppingCartList.reduce(function (a, b) {
            return a + parseInt(b.money);
        }, 0);
        for(let value of coupon){
            if($(this).val() === value.couponName)
            {
                $("#totalCart").html(result - result*value.valCoupon);

            }
        }
    })
    
});