/* amogus sussy baka deez nuts kofitezed */
var app = new function() {
    this.name = "The Last Day", this.version = "Unreleased v1", this.date = "2023", this.folder = "asset-v1/", this.looptime = 9600, this.bpm = 100, this.totalframe = 460, this.nbpolo = 7, this.nbloopbonus = 2, this.bonusloopA = !0, this.bonusendloopA = !0, this.recmaxloop = 34, this.recminloop = 4, this.recmintime = Math.round(this.looptime / 1e3) * this.recminloop, this.spritepolo = "polo-sprite.png", this.spritepicto = "game-picto.png", this.colBck = "#0f1521", this.col0 = "#828da0", this.col1 = "#596988", this.col2 = "#384863", this.col3 = "#202a3c", this.col4 = "#131a2a", this.animearray = [{
        name: "01kick",
        color: "af8553",
        uniqsnd: !1
    }, {
        name: "02snare",
        color: "af8553",
        uniqsnd: !1
    }, {
        name: "03clic",
        color: "af8553",
        uniqsnd: !1
    }, {
        name: "04klop",
        color: "af8553",
        uniqsnd: !0
    }, {
        name: "05tombreak",
        color: "af8553",
        uniqsnd: !1
    }, {
        name: "06bass",
        color: "10a3b7",
        uniqsnd: !1
    }, {
        name: "07mmmhah",
        color: "10a3b7",
        uniqsnd: !0
    }, {
        name: "08tututoung",
        color: "10a3b7",
        uniqsnd: !1
    }, {
        name: "09boowop",
        color: "10a3b7",
        uniqsnd: !0
    }, {
        name: "10woah",
        color: "10a3b7",
        uniqsnd: !1
    }, {
        name: "11nugununugu",
        color: "fe0849",
        uniqsnd: !1
    }, {
        name: "12string",
        color: "fe0849",
        uniqsnd: !1
    }, {
        name: "13lowarp",
        color: "fe0849",
        uniqsnd: !1
    }, {
        name: "14settoarp",
        color: "fe0849",
        uniqsnd: !1
    }, {
        name: "15duuduuduu",
        color: "fe0849",
        uniqsnd: !0
    }, {
        name: "16somuch",
        color: "9573fe",
        uniqsnd: !1
    }, {
        name: "17casting",
        color: "9573fe",
        uniqsnd: !1
    }, {
        name: "18ahwoo",
        color: "9573fe",
        uniqsnd: !1
    }, {
        name: "19lastday",
        color: "9573fe",
        uniqsnd: !1
    }, {
        name: "20mind",
        color: "9573fe",
        uniqsnd: !1 
    }, {
        name: "19lastday",
        color: "9573fe",
        uniqsnd: !1
    }, {
        name: "19lastday",
        color: "9573fe",
        uniqsnd: !1
    }, {
        name: "19lastday",
        color: "9573fe",
        uniqsnd: !1
    }, {
        name: "19lastday",
        color: "9573fe",
        uniqsnd: !1
    }], this.bonusarray = [{
        name: "The Last Day",
        src: "v1-b1-thelastday-hb.mp4",
        code: "4,6,9,11,19",
        sound: "bonus-thelastday",
        aspire: "aspire-thelastday"
    }];
    for (var n = 0, o = this.animearray.length; n < o; n++) {
        var a = this.animearray[n].name;
        this.animearray[n].soundA = a + "_a", this.animearray[n].soundB = this.animearray[n].uniqsnd ? a + "_a" : a + "_b", this.animearray[n].anime = a + "-sprite.svg", this.animearray[n].animeData = a + ".json"
    }
};
