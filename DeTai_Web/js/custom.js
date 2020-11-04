
/* ----------------------------------------------------------- */
/*  Phần xử lý load trang web
/* ----------------------------------------------------------- */

$(window).on("load", function () {

    setTimeout(function () {
        $(".box-loadding2").addClass("now1");
    }, 2000);

    let stringValueCart = "";
    let stringValueFavorite = "";
    let storageShoppingArr = localStorage.getItem("shoppingCartList");
    let shoppingCartList;
    let storageFavorite = localStorage.getItem("favoriteList");
    let favoriteList;

    /* Xử lý phần mảng và localStorage do google chorm cung cấp */
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
    

    for (let value of shoppingCartList) {
        stringValueCart += `<div class="box-cart">`;
        stringValueCart += `<div class="box-cart-img"><img src="${value.url}" alt=""></div>`
        stringValueCart += `<div class="box-cart-text"><h5>${value.name}</h5><p>${value.money}</p></div>`;
        stringValueCart += `<div class="box-cart-del"><i id="removeCart" class="fa fa-times""></i></div>`;
        stringValueCart += "</div>";
    }
    for (let value of favoriteList) {
        stringValueFavorite += `<div class="box-cart">`;
        stringValueFavorite += `<div class="box-cart-img"><img src="${value.url}" alt=""></div>`
        stringValueFavorite += `<div class="box-cart-text"><h5>${value.name}</h5><p>${value.money}</p></div>`;
        stringValueFavorite += `<div class="box-cart-del"><i id="removeCart" class="fa fa-times""></i></div>`;
        stringValueFavorite += "</div>";
    } 
    $("#box-shopping-cart").html(stringValueCart);
    $("#shoppingCart-tag").html(shoppingCartList.length);
    $("#box-favorite").html(stringValueFavorite);
    $("#favorite-tag").html(favoriteList.length);
    $(".woman-effect").addClass("lattraisang").one("webkitAnimationEnd", function () {
        $(".woman-effect").css("opacity", 1);
        $(".lattraisang").removeClass("lattraisang");
    })
    $(".man-effect").addClass("traisangphaisang").one("webkitAnimationEnd", function () {
        $(".man-effect").css("opacity", 1);
        $(".traisangphaisang").removeClass("traisangphaisang");
    })
    $(".kid-effect").addClass("quay90phaive").one("webkitAnimationEnd", function () {
        $(".kid-effect").css("opacity", 1);
        $(".quay90phaive").removeClass("quay90phaive");
    });
    $(".sport-effect").addClass("roirung").one("webkitAnimationEnd", function () {
        $(".sport-effect").css("opacity", 1);
        $(".roirung").removeClass("roirung");
    });
    
    
})
$(document).ready(function ()
 {
    
/* ----------------------------------------------------------- */
/*  xử lý phần header
/* ----------------------------------------------------------- */


    $(".header-shopping-card").hover(function () {
        $(this).find("#modal-cart").show();
    }, function () {
        $(this).find("#modal-cart").hide();
    });

    
/* ----------------------------------------------------------- */
/*  Xử lý phần menu scroll nav
/* ----------------------------------------------------------- */
 
    // Di chuyen den muc nam
    $(".scrollNav ul li:nth-child(1)").click(function () {

        $("html,body").animate({
            scrollTop: ($(".scrollMan").offset().top - 200)
        }, 800);
    });
    // Di chuyen den muc nu
    $(".scrollNav ul li:nth-child(2)").click(function () {
        $("html,body").animate({
            scrollTop: ($(".scrollWoman").offset().top - 200)
        }, 800);
    });
    // Di chuyen den muc tre em
    $(".scrollNav ul li:nth-child(3)").click(function () {
        $("html,body").animate({
            scrollTop: ($(".scrollKid").offset().top - 200)
        }, 800);
    });
    // Di chuyen den muc the thao
    $(".scrollNav ul li:nth-child(4)").click(function () {
        $("html,body").animate({
            scrollTop: ($(".scrollSport").offset().top - 200)
        }, 800);
    });
    $(".scrollNav ul li").each(function(){
        $(this).click(function(){
            $(".activeScroll").removeClass("activeScroll");
            $(this).addClass("activeScroll");

        })
    })

/* ----------------------------------------------------------- */
/*  xử lý phần người dùng cuộn chuột
/* ----------------------------------------------------------- */

    $(window).scroll(function (event) {

        let vitri = Math.max($("html").scrollTop(), $("body").scrollTop());
        if (vitri > $("#hp-nav").offset().top) {
            $("#hp-header").addClass("headerFixed").one("webkitAnimationEnd", function(){
                $(".header-shopping-card i").addClass("alternateY");
                $(".header-shopping-card svg").addClass("alternateY");
            });
            $("#hp-header #header-nav").css({ "margin-top": "-11px" });
            $("#form-inline-top").hide();
            $("#scrollTop").addClass("showScrollNav")
            $("#scrollNav").addClass("showScrollNav");
        }
        else if(vitri == 0) {
            $("#hp-header").removeClass("headerFixed");
            $(".header-shopping-card i").removeClass("alternateY");
            $(".header-shopping-card svg").removeClass("alternateY");
            $("#form-inline-top").show();
            $("#hp-header #header-nav").css({ "margin-top": "11px" });
            $("#scrollTop").removeClass("showScrollNav");
            $("#scrollNav").removeClass("showScrollNav");
        }
    })

    /* Hiệu ứng cuộn chuột khi người dùng cuộn đến phần sản phẩm phổ biến */
    $(window).scroll(function (event) {

        let vitri = Math.max($("html").scrollTop(), $("body").scrollTop());
        if (vitri > ($("#popular-cato").offset().top - 800)) {
            $(".card-effect2").addClass("hienra2");

        }
        else {
            $(".card-effect2").removeClass("hienra2");
            $(".card-effect2").css("opacity", 0);
        }
    })
    /* Hiệu ứng cuộn chuột khi người dùng cuộn đến phần sản phẩm nam */
    $(window).scroll(function (event) {

        let vitri = Math.max($("html").scrollTop(), $("body").scrollTop());
        if (vitri > ($(".scrollMan").offset().top - 800)) {
            $(".effect-box").addClass("hienra");
            $(".scrollMan .card-effect").addClass("hienra");

        }
        else {
            $(".effect-box").removeClass("hienra");
            $(".scrollMan .card-effect").removeClass("hienra");
        }
    });


    /* Hiệu ứng cuộn chuột khi người dùng cuộn đến phần sản phẩm nữ */
    $(window).scroll(function (event) {

        let vitri = Math.max($("html").scrollTop(), $("body").scrollTop());
        if (vitri > ($(".scrollWoman").offset().top - 900)) {
            $(".effect-box").addClass("hienra");
            $(".scrollWoman .card-effect").addClass("hienra");

        }
        else {
            $(".effect-box").removeClass("hienra");
            $(".scrollWoman .card-effect").removeClass("hienra");
        }
    });

    /* Hiệu ứng cuộn chuột khi người dùng cuộn đến phần sản phẩm trẻ em */
    $(window).scroll(function (event) {

        let vitri = Math.max($("html").scrollTop(), $("body").scrollTop());
        if (vitri > ($(".scrollKid").offset().top - 900)) {
            $(".effect-box").addClass("hienra");
            $(".scrollKid .card-effect").addClass("hienra");

        }
        else {
            $(".effect-box").removeClass("hienra");
            $(".scrollKid .card-effect").removeClass("hienra");
        }
    })

    /* Hiệu ứng cuộn chuột khi người dùng cuộn đến phần sản phẩm thể thao */
    $(window).scroll(function (event) {

        let vitri = Math.max($("html").scrollTop(), $("body").scrollTop());
        if (vitri > ($(".scrollSport").offset().top - 900)) {
            $(".effect-box").addClass("hienra");
            $(".scrollSport .card-effect").addClass("hienra");

        }
        else {
            $(".effect-box").removeClass("hienra");
            $(".scrollSport .card-effect").removeClass("hienra");
        }
    })
    
    /* chức năng cuộn chuột lên đầu trang */
    $('.scrollToTop').click(function () {
        $(".activeScroll").removeClass("activeScroll");
        $('html, body').animate({ scrollTop: 0 }, 800);
        return false;
    });
    
/* ----------------------------------------------------------- */
/*  xử lý phần thao tac với các sản phẩm
/* ----------------------------------------------------------- */

    /* thiết lập 2 chiều giữa mảng và localStorage của googleChorm */
    let storageShoppingArr = localStorage.getItem("shoppingCartList");
    let shoppingCartList ;
    if (storageShoppingArr){
        shoppingCartList = JSON.parse(storageShoppingArr);
    }
    else{
        shoppingCartList = []
    }
    let storageFavorite = localStorage.getItem("favoriteList");
    let favoriteList;
    if (storageFavorite) {
        favoriteList = JSON.parse(storageFavorite);
    }
    else {
        favoriteList = []
    }
    function renderShowBoxCart(idBox, idCount, arr) {

        let stringValue = "";
        for (let value of arr) {
            stringValue += `<div class="box-cart">`;
            stringValue += `<div class="box-cart-img"><img src="${value.url}" alt=""></div>`
            stringValue += `<div class="box-cart-text"><h5>${value.name}</h5><p>${value.money}</p></div>`;
            stringValue += `<div class="box-cart-del"><i id="removeCart" class="fa fa-times""></i></div>`;
            stringValue += "</div>";
        }
        $(`#${idBox}`).html(stringValue);
        $(`#${idCount}`).html(arr.length);
    }

    /* chức năng thêm vaò giỏ hàng */ 
    $(".addCart").click(function () {
        shoppingCartList.push({ "name": $(this).attr("name"), "money" : $(this).attr("value"), "url": $(this).attr("src") });
        localStorage.setItem("shoppingCartList", JSON.stringify(shoppingCartList));
        renderShowBoxCart("box-shopping-cart", "shoppingCart-tag", shoppingCartList);
    });

    /* chức năng thêm vào danh sách yêu thích */
    $(".addFavorite").click(function () {
        favoriteList.push({ "name": $(this).attr("name"), "money" : $(this).attr("value"), "url": $(this).attr("src") });
        localStorage.setItem("favoriteList", JSON.stringify(favoriteList));
        
        renderShowBoxCart("box-favorite", "favorite-tag", favoriteList);
    });

    /* chức năng xóa sản phẩm khỏi giỏ hàng và danh sách yêu thích*/
    $(".modal-content").hover(function () {

        $("#box-shopping-cart .box-cart").click(function () {
            for (let value of shoppingCartList) {
                if ($(this).find("img").attr("src") == value.url) {
                    shoppingCartList.splice(shoppingCartList.indexOf(value), 1);
                    break;
                }
            }
            localStorage.setItem("shoppingCartList", JSON.stringify(shoppingCartList));
            renderShowBoxCart("box-shopping-cart", "shoppingCart-tag", shoppingCartList);
        })
        $("#box-favorite .box-cart").click(function () {
            for (let value of favoriteList) {
                if ($(this).find("img").attr("src") == value.url) {
                    favoriteList.splice(favoriteList.indexOf(value), 1);
                    break;
                }
            }
            localStorage.setItem("favoriteList", JSON.stringify(favoriteList));
            renderShowBoxCart("box-favorite", "favorite-tag", favoriteList);
        })

    });


    /* chức năng bộ lọc các sản phẩm  */
    let productsPopular = [
        { name: "Áo Thun MaBu Basic CA01", price: 0, money : "185000 VND", url: "../Images/nam/ao/Ao-Thun-Nam-Ma-Bu-Basic-CA01(185k).jpg" },
        { name: "NE29", price: 0, money : "290000 VND", url: "../Images/nu/vay/ne29(290k).jpg" },
        { name: "Nón OLYMPIC CAP BLACK NK386", price: 0, money : "10000 VND", url: "../Images/phukien/mu/OLYMPIC-CAP-IN-BLACK-NK386(100k).jpg" },
        { name: "Quần Tây Nam A11", price: 0, money : "425000 VND", url: "../Images/nam/quan/quan-dai/Quan-Tay-Nam-No-Style-Dai-A11(425k).jpg" },
    ];
    let productFeatured = [
        { name: "Áo dài hoa g2", price: 0, money : "290000 VND", url: "../Images/nu/aodai/Ao-dai-hoa-g2(290k).jpg" },
        { name: "Áo dài hoa b4", price: 0, money : "290000 VND", url: "../Images/nu/aodai/Ao-dai-hoa-b4(290k).jpg" },
        { name: "Đồ Bơi Nữ 8ac4", price: 0, money : "259000 VND", url: "../Images/nu/doboi/bo-do-boi-nu-beo-phoi-dang-cheo-8ac4(259k).jpg" },
        { name: "Áo Thun Cổ Trụ G01", price: 0, money : "165000 VND", url: "../Images/nam/ao/Ao-Thun-Nam-Ma-Bu-Co-Tru-G01(165k).jpg" },
    ];
    let productLatest = [
        { name: "Áo Thun MaBu BO02", price: 0, money : "150000 VND", url: "../Images/nam/ao/Ao-Thun-Nam-Ma-Bu-Basic-BO02(150k).jpg" },
        { name: "Vòng ShamBalla VS105", price: 0, money : "60000 VND", url: "../Images/phukien/vongtay/SHAMBALLA-BRACELETS-VS105(60k).jpg" },
        { name: "Nón Cap in green NK379", price: 0, money : "100000 VND", url: "../Images/phukien/mu/NFL-CAP-IN-GREEN-NK379(100k).jpg" },
        { name: "WHITE SHOES SOCK IN RED TA718", price: 0, money : "60000 VND", url: "../Images/phukien/tat/OFF-WHITE-SHOES-SOCK-IN-RED-TA718(60k).jpg" },
        
    ];
    let vaynu = [
        { name: "LS24", money: "240000 VND", url: "../Images/nu/vay/ls24(240k).jpg"},
        { name: "LS25", money: "250000 VND", url: "../Images/nu/vay/ls25(250k).jpg" },
        { name: "LX11", money: "260000 VND", url: "../Images/nu/vay/lx11(260k).jpg" },
        { name: "LS24", money: "260000 VND", url: "../Images/nu/vay/ne21(260k).jpg" },
        { name: "NE27", money: "260000 VND", url: "../Images/nu/vay/ne27(260k).jpg" },
        { name: "NE29", money: "290000 VND", url: "../Images/nu/vay/ne29(290k).jpg" },
        { name: "NP19", money: "250000 VND", url: "../Images/nu/vay/np19(250k).jpg" },
        { name: "LS24", money: "260000 VND", url: "../Images/nu/vay/np20(260k).jpg" },
        { name: "LS24", money: "260000 VND", url: "../Images/nu/vay/np21(260k).jpg" },
        { name: "LS24", money: "250000 VND", url: "../Images/nu/vay/oa5(250k).jpg" },
        { name: "LS24", money: "265000 VND", url: "../Images/nu/vay/oa24(265k).jpg" },
        { name: "LS24", money: "270000 VND", url: "../Images/nu/vay/ob8(270k).jpg" },

    ];
    let aodainu = [
        { name: "LS24", money: "290000 VND", url: "../Images/nu/aodai/Ao-dai-hoa(290k).jpg" },
        { name: "LS25", money: "295000 VND", url: "../Images/nu/aodai/Ao-dai-hoa(295k).jpg" },
        { name: "LX11", money: "290000 VND", url: "../Images/nu/aodai/Ao-dai-hoa-a1(290k).jpg" },
        { name: "LS24", money: "290000 VND", url: "../Images/nu/aodai/Ao-dai-hoa-a2(290k).jpg" },
        { name: "LS25", money: "290000 VND", url: "../Images/nu/aodai/Ao-dai-hoa-a4(290k).jpg" },
        { name: "LX11", money: "290000 VND", url: "../Images/nu/aodai/Ao-dai-hoa-a11(290k).jpg" },
        { name: "LS24", money: "290000 VND", url: "../Images/nu/aodai/Ao-dai-hoa-b1(290k).jpg" },
        { name: "LS25", money: "290000 VND", url: "../Images/nu/aodai/Ao-dai-hoa-b2(290k).jpg" },
        { name: "LX11", money: "290000 VND", url: "../Images/nu/aodai/Ao-dai-hoa-b3(290k).jpg" },
        { name: "LS24", money: "290000 VND", url: "../Images/nu/aodai/Ao-dai-hoa-b4(290k).jpg" },
        { name: "LS25", money: "290000 VND", url: "../Images/nu/aodai/Ao-dai-hoa-b5(290k).jpg" },
        { name: "LX11", money: "290000 VND", url: "../Images/nu/aodai/Ao-dai-hoa-b6(290k).jpg" },
    ];
    let doboinu = [
        { name: "LS24", money: "140000 VND", url: "../Images/nu/doboi/ao-bikini-hoa-thoi-trang-07eb(140k).jpg" },
        { name: "LS24", money: "269000 VND", url: "../Images/nu/doboi/ao-khoac-di-bien-that-eo-ren-coral-c006-59bb(269k).jpg" },
        { name: "LX11", money: "429000 VND", url: "../Images/nu/doboi/bikini-1-manh-phoi-mau-coral-ot013-cd46(429k).jpg" },
        { name: "LS24", money: "399000 VND", url: "../Images/nu/doboi/bikini-1-manh-vay-yem-hoa-tiet-coral-od011-25ca(399k).jpg" },
        { name: "LS24", money: "399000 VND", url: "../Images/nu/doboi/bikini-1-manh-vay-yem-hoa-tiet-coral-od011-c415(399k).jpg" },
        { name: "LS24", money: "459000 VND", url: "../Images/nu/doboi/bikini-2-manh-hoa-tiet-la-dua-coral-bs015-0d00(459k).jpg" },
        { name: "LX11", money: "459000 VND", url: "../Images/nu/doboi/bikini-2-manh-hoa-tiet-la-dua-coral-bs015-597e(459k).jpg" },
        { name: "LS24", money: "275000 VND", url: "../Images/nu/doboi/bikini-2-manh-lan-hanh-22005-99a3(275k).jpg" },
        { name: "LX11", money: "275000 VND", url: "../Images/nu/doboi/bikini-2-manh-lan-hanh-22005-f1f9(275k).jpg" },
        { name: "LS24", money: "269000 VND", url: "../Images/nu/doboi/bo-bikini-yem-dao-xinh-xan-ee1b(269k).jpg" },
        { name: "LS25", money: "269000 VND", url: "../Images/nu/doboi/bo-do-boi-lien-manh-the-thao-f58a(269k).jpg" },
        { name: "LX11", money: "259000 VND", url: "../Images/nu/doboi/bo-do-boi-nu-beo-phoi-dang-cheo-8ac4(259k).jpg" },

    ];
    let aonam = [
        { name: "Áo Thun Nam MaBu H02", money: "145000 VND", url: "../Images/nam/ao/Ao-Thun-Nam-Ma-Bu-3-Lo-H02(145k).jpg" },
        { name: "Áo Thun Nam MaBu BN03", money: "150000 VND", url: "../Images/nam/ao/Ao-Thun-Nam-Ma-Bu-Basi- BN03(150k).jpg" },
        { name: "Áo Thun Nam MaBu BN02", money: "150000 VND", url: "../Images/nam/ao/Ao-Thun-Nam-Ma-Bu-Basic-BN02(150k).jpg" },
        { name: "Áo Thun Nam MaBu BN03", money: "150000 VND", url: "../Images/nam/ao/Ao-Thun-Nam-Ma-Bu-Basic-BN03(150k).jpg" },
        { name: "Áo Thun Nam MaBu BO02", money: "150000 VND", url: "../Images/nam/ao/Ao-Thun-Nam-Ma-Bu-Basic-BO02(150k).jpg" },
        { name: "Áo Thun Nam MaBu BO029", money: "120000 VND", url: "../Images/nam/ao/Ao-Thun-Nam-Ma-Bu-Basic-BO029(120k).jpg" },
        { name: "Áo Thun Nam MaBu CA01", money: "165000 VND", url: "../Images/nam/ao/Ao-Thun-Nam-Ma-Bu-Basic-C02(165k).jpg" },
        { name: "Áo Thun Nam MaBu C02", money: "150000 VND", url: "../Images/nam/ao/Ao-Thun-Nam-Ma-Bu-Basic-CA01(150k).jpg" },
        { name: "Áo Thun Nam MaBu CA01", money: "185000 VND", url: "../Images/nam/ao/Ao-Thun-Nam-Ma-Bu-Basic-CA01(185k).jpg" },
        { name: "Áo Thun Nam MaBu ST26", money: "150000 VND", url: "../Images/nam/ao/Ao-Thun-Nam-Ma-Bu-Basic-ST26(150k).jpg" },
        { name: "Áo Thun Nam MaBu ST86", money: "120000 VND", url: "../Images/nam/ao/Ao-Thun-Nam-Ma-Bu-Basic-ST86(120k).jpg" },
        { name: "Áo Thun Nam Cổ Trơn 3248", money: "180000 VND", url: "../Images/nam/ao/Ao-thun-co-tron-ATT-3248(180k).jpg" },
    ];
    
    let quandainam = [
        { name: "Quần Jogger Nam MaBu W02", money: "285000 VND", url: "../Images/nam/quan/quan-dai/Quan-Jogger-Nam-Ma-Bu-Thun-W02(285k).jpg" },
        { name: "Quần Jogger Nam MaBu ST03", money: "185000 VND", url: "../Images/nam/quan/quan-dai/Quan-Jogger-Nam-Ma-Bu-Thun-ST03(185k).jpg" },
        { name: "Quần Jogger Nam MaBu S02", money: "2550000 VND", url: "../Images/nam/quan/quan-dai/Quan-jogger-Nam-Ma-Bu-Thun-S02(255k).jpg" },
        { name: "Quần Jogger Nam MaBu AA02", money: "2550000 VND", url: "../Images/nam/quan/quan-dai/Quan-Jogger-Nam-Ma-Bu-Thun-AA02(255k).jpg" },   
        { name: "Quần Jean Nam MaBu K92", money: "385000 VND", url: "../Images/nam/quan/quan-dai/Quan-Jean-Nam-Ma-Bu-Dai-K92(385k).jpg" },
        { name: "Quần Jean Nam MaBu K75", money: "385000 VND", url: "../Images/nam/quan/quan-dai/Quan-Jean-Nam-Ma-Bu-Dai-K75(385k).jpg" },
        { name: "Quần Jean Nam MaBu K74", money: "385000 VND", url: "../Images/nam/quan/quan-dai/Quan-Jean-Nam-Ma-Bu-Dai-K74(385k).jpg" },
        { name: "Quần Jean Nam MaBu K71", money: "385000 VND", url: "../Images/nam/quan/quan-dai/Quan-Jean-Nam-Ma-Bu-Dai-K71(385k).jpg" },
        { name: "Quần Jean Nam MaBu Dai K65", money: "385000 VND", url: "../Images/nam/quan/quan-dai/Quan-Jean-Nam-Ma-Bu-Dai-K65(385k).jpg" },
        { name: "Quần Jean Nam MaBu K61", money: "425000 VND", url: "../Images/nam/quan/quan-dai/Quan-Jean-Nam-Ma-Bu-Dai-K61(425k).jpg" },
        { name: "Quần Jean Nam MaBu Dài K52", money: "425000 VND", url: "../Images/nam/quan/quan-dai/Quan-Jean-Nam-Ma-Bu-Dai-K52(425k).jpg" },
        { name: "Quần Jean Nam MaBu Dài K46", money: "385000 VND", url: "../Images/nam/quan/quan-dai/Quan-Jean-Nam-Ma-Bu-Dai-K46(385k).jpg" },  
    ];
    let quanshortnam = [
        { name: "Quần KaKi Nam Sooc KM01", money: "255000 VND", url: "../Images/nam/quan/quan-short/Quan-Kaki-Nam-No-Style-Sooc-KM01(255k).jpg" },
        { name: "Quần KaKi Nam Sooc C04", money: "255000 VND", url: "../Images/nam/quan/quan-short/Quan-Kaki-Nam-No-Style-Sooc-C04(255k).jpg" },
        { name: "Quần KaKi Nam Sooc Y02", money: "255000 VND", url: "../Images/nam/quan/quan-short/Quan-Kaki-Nam-Ma-Bu-Sooc-Y02(255k).jpg" },
        { name: "Quần KaKi Nam Sooc ST07", money: "225000 VND", url: "../Images/nam/quan/quan-short/Quan-Kaki-Nam-Ma-Bu-Sooc-ST07(225k).jpg" },
        { name: "Quần KaKi Nam Sooc ST05", money: "225000 VND", url: "../Images/nam/quan/quan-short/Quan-Kaki-Nam-Ma-Bu-Sooc-ST05(225).jpg" },
        { name: "Quần KaKi Nam Sooc ST02", money: "185000 VND", url: "../Images/nam/quan/quan-short/Quan-Kaki-Nam-Ma-Bu-Sooc-ST02(185k).jpg" },
        { name: "Quần KaKi Nam Sooc O04", money: "225000 VND", url: "../Images/nam/quan/quan-short/Quan-Kaki-Nam-Ma-Bu-Sooc-O04(225k).jpg" },
        { name: "Quần KaKi Nam Sooc O02", money: "225000 VND", url: "../Images/nam/quan/quan-short/Quan-Kaki-Nam-Ma-Bu-Sooc-O02(225k).jpg" },
        { name: "Quần KaKi Nam Sooc M02", money: "225000 VND", url: "../Images/nam/quan/quan-short/Quan-Kaki-Nam-Ma-Bu-Sooc-M02(225k).jpg" },
        { name: "Quần KaKi Nam Sooc G01", money: "185000 VND", url: "../Images/nam/quan/quan-short/Quan-Kaki-Nam-Ma-Bu-Sooc-G01(185k).jpg" },
        { name: "Quần Jean Nam Sooc Y32", money: "295000 VND", url: "../Images/nam/quan/quan-short/Quan-Jean-Nam-Ma-Bu-Sooc-Y32(295k).jpg" },
        { name: "Quần Jean Nam Sooc A49", money: "255000 VND", url: "../Images/nam/quan/quan-short/Quan-Jean-Nam-Ma-Bu-Sooc-A49(255k).jpg" },
    ];
    let non = [
        { name: "Nón Olympic Black NK38", money: "100000 VND", url: "../Images/phukien/mu/OLYMPIC-CAP-IN-BLACK-NK38(100k).jpg" },
        { name: "Nón NY White NK344", money: "100000 VND", url: "../Images/phukien/mu/NY-CAP-IN-WHITE-NK344(100k).jpg" },
        { name: "Nón NFL Green NK379", money: "100000 VND", url: "../Images/phukien/mu/NFL-CAP-IN-GREEN-NK379(100k).jpg" },
        { name: "Nón Monler Blue NK358", money: "100000 VND", url: "../Images/phukien/mu/MONLER-CAP-IN-BLUE-NK358(100k).jpg" },
        { name: "Nón Lacoste Green NK376", money: "100000 VND", url: "../Images/phukien/mu/LACOSTE-CAP-IN-GREEN-NK376(100k).jpg" },
        { name: "Nón Jordan Black NK373", money: "100000 VND", url: "../Images/phukien/mu/JORDAN-CAP-IN-BLACK-NK373(100k).jpg" },
        { name: "Nón Fila White NK346", money: "100000 VND", url: "../Images/phukien/mu/FILA-CAP-IN-WHITE-NK346(100k).jpg" },
        { name: "Nón Fila Black NK345", money: "100000 VND", url: "../Images/phukien/mu/FILA-CAP-IN-BLACK-NK345(100k).jpg" },
        { name: "Nón Dickies White NK348", money: "100000 VND", url: "../Images/phukien/mu/DICKIES-CAP-IN-WHITE-NK348(100k).jpg" },
        { name: "Nón Converse Red NK353", money: "100000 VND", url: "../Images/phukien/mu/CONVERSE-CAP-IN-RED-NK353(100k).jpg" },
        { name: "Nón Cap White NK362", money: "100000 VND", url: "../Images/phukien/mu/CAP-IN-WHITE-NK362(100k).jpg" },
        { name: "Nón Anti Social White NK350", money: "100000 VND", url: "../Images/phukien/mu/ANTI-SOCIAL-SOCIAL-CLUB-CAP-IN-WHITE-NK350(100k).jpg" },
    ];
    let vongtay = [
        { name: "Vòng ShamBaLLa VS105", money: "60000 VND", url: "../Images/phukien/vongtay/SHAMBALLA-BRACELETS-VS105(60k).jpg" },
        { name: "Vòng ShamBaLLa VS104", money: "60000 VND", url: "../Images/phukien/vongtay/SHAMBALLA-BRACELETS-VS104(60k).jpg" },
        { name: "Vòng ShamBaLLa VS103", money: "60000 VND", url: "../Images/phukien/vongtay/SHAMBALLA-BRACELETS-VS103(60k).jpg" },
        { name: "Vòng ShamBaLLa VS101", money: "60000 VND", url: "../Images/phukien/vongtay/SHAMBALLA-BRACELETS-VS101(60k).jpg" },
        { name: "Vòng ShamBaLLa VS100", money: "60000 VND", url: "../Images/phukien/vongtay/SHAMBALLA-BRACELETS-VS100(60k).jpg" },
        { name: "Vòng ShamBaLLa VS098", money: "60000 VND", url: "../Images/phukien/vongtay/SHAMBALLA-BRACELETS-VS098(60k).jpg" },
        { name: "Vòng ShamBaLLa VS11", money: "60000 VND", url: "../Images/phukien/vongtay/SHAMBALLA-BRACELETS-VS11(60k).jpg" },
        { name: "Vòng ShamBaLLa VS224", money: "50000 VND", url: "../Images/phukien/vongtay/BROCADE-BRACELETS-IN-BROWN-VS224(50k).jpg" },
        { name: "Vòng ShamBaLLa VS225", money: "50000 VND", url: "../Images/phukien/vongtay/BROCADE-BRACELETS-IN-BLACK-VS225(50k).jpg" },
        { name: "Vòng ShamBaLLa VS208", money: "60000 VND", url: "../Images/phukien/vongtay/BRACELETS-VS208(60k).jpg" },
        { name: "Vòng ShamBaLLa VS206", money: "50000 VND", url: "../Images/phukien/vongtay/BRACELETS-VS206(50k).jpg" },
        { name: "Vòng ShamBaLLa VS205", money: "50000 VND", url: "../Images/phukien/vongtay/BRACELETS-VS205(50k).jpg" },
    ];
    let tat = [
        { name: "Shoes sock in purple TA727", money: "65000 VND", url: "../Images/phukien/tat/SHOES-SOCK-IN-PURPLE-TA727(65k).jpg" },
        { name: "Shoes sock in purple TA728", money: "65000 VND", url: "../Images/phukien/tat/SHOES-SOCK-IN-GEY-TA728(65k).jpg" },
        { name: "WHITE SHOES SOCK IN WHITE TA733", money: "60000 VND", url: "../Images/phukien/tat/OFF-WHITE-SHOES-SOCK-IN-WHITE-TA733(60k).jpg" },
        { name: "WHITE SHOES SOCK IN WHITE TA718", money: "60000 VND", url: "../Images/phukien/tat/OFF-WHITE-SHOES-SOCK-IN-RED-TA718(60k).jpg" },
        { name: "WHITE SHOES SOCK IN WHITE TA740", money: "55000 VND", url: "../Images/phukien/tat/OFF-WHITE-SHOES-SOCK-IN-BLACK-TA740(55k).jpg" },
        { name: "WHITE SHOES SOCK IN WHITE TA737", money: "70000 VND", url: "../Images/phukien/tat/OFF-WHITE-SHOES-SOCK-IN-BLACK-TA737(70k).jpg" },
        { name: "WHITE SHOES SOCK IN WHITE TA734", money: "60000 VND", url: "../Images/phukien/tat/OFF-WHITE-SHOES-SOCK-IN-BLACK-TA734(60k).jpg" },
        { name: "WHITE SHOES SOCK IN WHITE TA743", money: "40000 VND", url: "../Images/phukien/tat/MOOD-MOOD-SHOES-SOCK-IN-BLACK-TA743(40k).jpg" },
        { name: "KEEP REAL SHOES SOCK IN BLACK TA739", money: "55000 VND", url: "../Images/phukien/tat/KEEP-REAL-SHOES-SOCK-IN-BLACK-TA739(55k).jpg" },
        { name: "JOPANA SHOES SOCK IN BLACK TA730", money: "60000 VND", url: "../Images/phukien/tat/JOPANA-SHOES-SOCK-IN-BLACK-TA730(60k).jpg" },
        { name: "COW PRINT SHOES SOCK IN CREAM TA742", money: "50000 VND", url: "../Images/phukien/tat/COW-PRINT-SHOES-SOCK-IN-CREAM-TA742(50k).jpg" },
        { name: "SHOES SOCK IN RED TA745", money: "40000 VND", url: "../Images/phukien/tat/23-SHOES-SOCK-IN-RED-TA745(40k).jpg" },
    
    ];

    $(".popular-cato .nav-item .nav-link").click(function(){

        $(".card-effect2").removeClass("hienra2");
        $(".card-effect2").addClass("effectFilter").one("webkitAnimationEnd", function(){
            $(".effectFilter").removeClass("effectFilter");
            $(".card-effect2").css("opacity", 1);
        });
        $(".popular-cato").find(".activeFilter").removeClass("activeFilter")
        $(this).addClass("activeFilter");
    }); /* hiệu ứng khi lọc sản phẩm */
    
    $(".product-man .nav-item .nav-link").click(function () {
        $(".card-effect").css("opacity", 0);
        $(".product-man").find(".activeFilter").removeClass("activeFilter")
        $(".woman-effect").addClass("lattraisang").one("webkitAnimationEnd", function(){
            $(".woman-effect").css("opacity", 1);
            $(".lattraisang").removeClass("lattraisang");
        });
        $(".man-effect").addClass("traisangphaisang").one("webkitAnimationEnd", function () {
            $(".man-effect").css("opacity", 1);
            $(".traisangphaisang").removeClass("traisangphaisang");
        });
        $(".kid-effect").addClass("quay90phaive").one("webkitAnimationEnd", function () {
            $(".kid-effect").css("opacity", 1);
            $(".quay90phaive").removeClass("quay90phaive");
        });
        $(".sport-effect").addClass("roirung").one("webkitAnimationEnd", function () {
            $(".sport-effect").css("opacity", 1);
            $(".roirung").removeClass("roirung");
        });
        $(this).addClass("activeFilter");
    }); 
    function renderBoxProductPop(boxFilter, arr) {

        let count=1;
        for (let value of arr) {
            $(`.${boxFilter}:nth-child(${count}) .card-img-top img`).attr("src", value.url);
            $(`.${boxFilter}:nth-child(${count}) .card-img-top`).find(".addFavorite").attr({"name" : value.name, "value" : value.money, "src" : value.url});
            $(`.${boxFilter}:nth-child(${count}) .card-img-top`).find(".addCart").attr({ "name": value.name, "value": value.money, "src": value.url });
            $(`.${boxFilter}:nth-child(${count}) .card-body`).find(".card-title").html(value.name);
            $(`.${boxFilter}:nth-child(${count}) .card-body`).find(".card-text").html(value.money);
            count++;
        }
    };
    /* lọc các san phẩm mục sản phẩm phổ biến */
    $(".popular-cato .nav-item:nth-child(1) .nav-link").click(function(event){
        event.preventDefault();
        renderBoxProductPop("boxFilterPopular", productsPopular);
    });
    $(".popular-cato .nav-item:nth-child(2) .nav-link").click(function(event){
        event.preventDefault();
        renderBoxProductPop("boxFilterPopular", productFeatured);
    });
    $(".popular-cato .nav-item:nth-child(3) .nav-link").click(function(event){
        event.preventDefault();
        renderBoxProductPop("boxFilterPopular", productLatest);
    });

    /* lọc các sản phẩm của nam */
    $(".product-man-filter .nav-item:nth-child(1) .nav-link").click(function(event){
        event.preventDefault();
        renderBoxProductPop("boxFilterMan", aonam);
    });
    $(".product-man-filter .nav-item:nth-child(2) .nav-link").click(function(event){
        event.preventDefault();
        renderBoxProductPop("boxFilterMan", quandainam);
    });
    $(".product-man-filter .nav-item:nth-child(3) .nav-link").click(function(event){
        event.preventDefault();
        renderBoxProductPop("boxFilterMan", quanshortnam);
    });

    /* lọc các sản phẩm của nữ */
    $(".product-woman-filter .nav-item:nth-child(1) .nav-link").click(function(event){
        event.preventDefault();
        renderBoxProductPop("boxFilterWoman", vaynu);
    });
    $(".product-woman-filter .nav-item:nth-child(2) .nav-link").click(function(event){
        event.preventDefault();
        renderBoxProductPop("boxFilterWoman", aodainu);
    });
    $(".product-woman-filter .nav-item:nth-child(3) .nav-link").click(function(event){
        event.preventDefault();
        renderBoxProductPop("boxFilterWoman", doboinu);
    });

    /* lọc các sản phẩm của trẻ em */
    $(".product-kid .nav-item:nth-child(1) .nav-link").click(function(event){
        event.preventDefault();
        renderBoxProductPop("boxFilterKid", productsPopular);
    });
    $(".product-kid .nav-item:nth-child(2) .nav-link").click(function(event){
        event.preventDefault();
        renderBoxProductPop("boxFilterKid", productFeatured);
    });
    $(".product-kid .nav-item:nth-child(3) .nav-link").click(function(event){
        event.preventDefault();
        renderBoxProductPop("boxFilterKid", productLatest);
    });

    /* lọc các sản phẩm thể thao */
    $(".product-sport .nav-item:nth-child(1) .nav-link").click(function(event){
        event.preventDefault();
        renderBoxProductPop("boxFilterSport", non);
    });
    $(".product-sport .nav-item:nth-child(2) .nav-link").click(function(event){
        event.preventDefault();
        renderBoxProductPop("boxFilterSport", vongtay);
    });
    $(".product-sport .nav-item:nth-child(3) .nav-link").click(function(event){
        event.preventDefault();
        renderBoxProductPop("boxFilterSport", tat);
    });
    

/* ----------------------------------------------------------- */
/*  xử lý phần thao tac với form
/* ----------------------------------------------------------- */

    /* xử lý form đăng ký */
    let userArrKey = localStorage.getItem("userList");
    let userArr;
    if(userArrKey){
        userArr = JSON.parse(userArrKey)
    }
    else{
        userArr = [];
    }
    function ktTrungEmail(stringValue){

        for(let value of userArr){
            if (stringValue ===  value.email)
                return true;
        }
        return false;
    }
    function ktTrungUser(stringValue){

        for (let value of userArr) {
            if (stringValue === value.user)
                return true;
        }
        return false;
    }
    function ktPassword(stringValue){

        for (let value of userArr) {
            if (stringValue === value.password)
                return true;
        }
        return false;
    }
    function checkFirstName() {
        let reg = /[a-zA-Z]{2,}/;
        if ($("#form-input-firstName").val()) {
            if (reg.test($("#form-input-firstName").val())) {
                $("#erFirstName").html("");
                return true;
            }
            else {
                $("#erFirstName").html("Tên không hợp không hợp lệ");
                return false;
            }
        }
    }

    function checkLastName() {
        let reg = /[a-zA-Z]{2,}/;
        if ($("#form-input-lastName").val()) {
            if (reg.test($("#form-input-lastname").val())) {
                $("#erFirstName").html("");
                return true;
            }
            else {
                $("#erLastName").html("Họ không hợp không hợp lệ");
                return false;
            }
        }
    }

    function checkMaildk(){
        
        let reg = /[a-zA-Z0-9]+\@[a-zA-Z]{4,7}\.([a-zA-Z]){3}/i;
        if ($("#form-input-email").val()){
            if (ktTrungEmail($("#form-input-email").val())) {
                $("#erEmail").html("Email đã tồn tại");
                return false;
            }
            else{
                if (reg.test($("#form-input-email").val())) {
                    $("#erEmail").html("");
                    return true;
                }
                else {
                    $("#erEmail").html("Email không hợp lệ");
                    return false;
                }
            }
        }
        else {
            $("#erEmail").html("Email Không được bỏ trống");
            return false;
        }
    }
    function checkUserdk(){

        let reg = /[a-zA-Z0-9]+/;
        if ($("#form-input-user").val()) {
            if (ktTrungUser($("#form-input-user").val())) {
                $("#erUser").html("Email đã tồn tại");
                return false;
            }
            else {
                if (reg.test($("#form-input-user").val())) {
                    $("#erUser").html("");
                    return true;
                }
                else {
                    $("#erUser").html("User không hợp lệ");
                    return false;
                }
            }
        }
        else {
            $("#erUser").html("Tên tài khoản Không được bỏ trống");
            return false;
        }
    }
    function checkPassworddk(){
        
        let reg = /[A-Za-z0-9(!@#$%^&*()_ ]{6,20}/;
        if ($("#form-input-password").val()) {
            if (reg.test($("#form-input-password").val())) {
                $("#errPassword").html("");
                return true;
            }
            else {
                $("#errPassword").html("Mật khảu không hợp lệ");
                return false;
            }
        }
        else {
            $("#errPassword").html("Mật khẩu Không được bỏ trống");
            return false;
        }
    }
    function checkPasswordAgain(){

        if ($("#form-input-password-again").val()){
            if ($("#form-input-password-again").val() === $("#form-input-password").val())
            {
                $("#erPasswordAgain").html("");
                return true;
            }
            else{
                $("#erPasswordAgain").html("Mật khẩu không trùng khớp");
                return false;
            }
        }
        else{
            $("#erPasswordAgain").html("Mật khẩu không được để trống");
            return false;
        }
    }

    function checkPhoneNumber(){

        let reg = /(09|01[2|6|8|9])+([0-9]{8})\b/;
        if ($("#form-input-phoneNumber").val()) {
            if (reg.test($("#form-input-phoneNumber").val())) {
                $("#erPhoneNumber").html("");
                return true;
            }
            else {
                $("#erPhoneNumber").html("Số điện thoại không hợp lệ");
                return false;
            }
        }
        else {
            $("#erPhoneNumber").html("Số điện thoại Không được bỏ trống");
            return false;
        }
    }
    $("#form-input-firstName").blur(function () {
        checkFirstName();
    });

    $("#form-input-lastNames").blur(function () {
        checkLastName();
    });
    $("#form-input-user").blur(function () {
        checkUserdk();
    });
    $("#form-input-email").blur(function(){
        checkMaildk();
    });
    $("#form-input-password").blur(function(){
        checkPassworddk();
    });
    $("#form-input-password-again").blur(function () {
        checkPasswordAgain();
    });
    $("#form-input-phoneNumber").blur(function () {
        checkPhoneNumber();
    });

    $("#form-input-dk").click(function(){
        if(checkMaildk() && checkPassworddk() && checkPasswordAgain() &&checkUserdk() && checkPhoneNumber()){
            userArr.push({ "user": $("#form-input-user").val(),"email": $("#form-input-email").val(), "password": $("#form-input-password").val()})
            localStorage.setItem("userList", JSON.stringify(userArr));
            $("#confirm-form-dk").html("Đăng ký thành công");
            $("#confirm-form-dk").css({ "color": "blue", "opacity": 1 });
        }
        else{
            checkMaildk();
            checkPassworddk();
            checkPasswordAgain();
            checkUserdk();
            checkPhoneNumber();
            $("#confirm-form-dk").html("Vui lòng nhập chính xác");
            $("#confirm-form-dk").css({"color" : "red", "opacity" :1});
        }
    })

    /* xử lý form đăng nhập */
    function checkMaildn() {

        if ($("#form-input-email-dn").val() !== null) {
            if (ktTrungEmail($("#form-input-email-dn").val())) {
                $("#er4").html("");
                return true;
            }
            else {
                $("#er4").html("Email chưa được đăng ký");
                return false;
            }
        }
        else {
            $("#er4").html("Địa Không được bỏ trống");
            return false;
        }
    }
    function checkPassworddn() {

        if ($("#form-input-password-dn").val() !== null) {
            if (ktPassword($("#form-input-password-dn").val())) {
                $("#er5").html("");
                return true;
            }
            else {
                $("#er5").html("Mật khẩu không đúng");
                return false;
            }
        }
        else {
            $("#er5").html("Mật khẩu Không được bỏ trống");
            return false;
        }
    }
    $("#form-input-dn").click(function(){
        if(checkMaildn() && checkPassworddn()){
            $("#confirm-form-dn").html("Đăng nhập thành công");
            $("#confirm-form-dn").css("color", "blue");
            $("#form-inline-top").remove();
        }
        else {
            checkMaildn();
            checkPassworddn();
            $("#confirm-form-dn").html("");
        }
    });

});