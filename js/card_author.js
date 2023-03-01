var card_author = {
  getTimeState: function() {
      var e = (new Date).getHours()
        , t = "";
      return 0 <= e && e <= 5 ? t = "朋友你好呀👋" : 5 < e && e <= 10 ? t = "朋友早上好呀👋" : 10 < e && e <= 14 ? t = "朋友中午好呀👋" : 14 < e && e <= 18 ? t = "朋友下午好呀👋" : 18 < e && e <= 24 && (t = "朋友晚上好呀👋"),
      t
  },
  sayhi: function() {
      var e = document.getElementById("author-info__sayhi");
      e && (e.innerHTML = card_author.getTimeState() + "")
  },
}
card_author.sayhi();