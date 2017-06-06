
$(document).ready(function () {
    /*
     * $1 sliders
     * $2 tabs
     * $3 onScroll ipad animation
     * $4 before after effect
     * $5 onScroll slider Icons animation
     * $6 WowJs
     * */

    //$1
    var scene = $('#scene').get(0);

    var parallax = new Parallax(scene);



});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJjb21tb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XG4gICAgLypcbiAgICAgKiAkMSBzbGlkZXJzXG4gICAgICogJDIgdGFic1xuICAgICAqICQzIG9uU2Nyb2xsIGlwYWQgYW5pbWF0aW9uXG4gICAgICogJDQgYmVmb3JlIGFmdGVyIGVmZmVjdFxuICAgICAqICQ1IG9uU2Nyb2xsIHNsaWRlciBJY29ucyBhbmltYXRpb25cbiAgICAgKiAkNiBXb3dKc1xuICAgICAqICovXG5cbiAgICAvLyQxXG5cblxuXG4gICAgLy8gJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbigpeyAvL3doeSBkb2Vzbid0IHdvcms/XG4gICAgLy9cbiAgICAvLyAgICAgJCgnLmpzLWljb25fX3NsaWRlcicpLnNsaWNrKHtcbiAgICAvLyAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcbiAgICAvLyAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgIC8vICAgICAgICAgYXV0b3BsYXk6IHRydWUsXG4gICAgLy8gICAgICAgICBhdXRvcGxheVNwZWVkOiAyMDAwLFxuICAgIC8vICAgICAgICAgYXJyb3dzOiBmYWxzZSxcbiAgICAvLyAgICAgICAgIHJlc3BvbnNpdmU6IFtcbiAgICAvLyAgICAgICAgICAgICB7XG4gICAgLy8gICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDEyODAsXG4gICAgLy8gICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyXG4gICAgLy8gICAgICAgICAgICAgICAgIH1cbiAgICAvLyAgICAgICAgICAgICB9LFxuICAgIC8vICAgICAgICAgICAgIHtcbiAgICAvLyAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogODAwLFxuICAgIC8vICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMVxuICAgIC8vICAgICAgICAgICAgICAgICB9XG4gICAgLy8gICAgICAgICAgICAgfVxuICAgIC8vICAgICAgICAgXVxuICAgIC8vICAgICB9KTtcbiAgICAvL1xuICAgIC8vIH0pO1xuXG4gICAgd2luZG93LnNsaWRlckZvckF1dG9wbGF5ID0gJCgnLmpzLWljb25fX3NsaWRlcicpLnNsaWNrKHtcbiAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxuICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgICAgYXV0b3BsYXk6IGZhbHNlLFxuICAgICAgICBhdXRvcGxheVNwZWVkOiAyMDAwLFxuICAgICAgICB3YWl0Rm9yQW5pbWF0ZTogZmFsc2UsXG4gICAgICAgIGluaXRpYWxTbGlkZTogMCxcbiAgICAgICAgYXJyb3dzOiBmYWxzZSxcbiAgICAgICAgLy8gcmVzcG9uc2l2ZTogW1xuICAgICAgICAvLyAgICAge1xuICAgICAgICAvLyAgICAgICAgIGJyZWFrcG9pbnQ6IDEyODAsXG4gICAgICAgIC8vICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgLy8gICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcbiAgICAgICAgLy8gICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyXG4gICAgICAgIC8vICAgICAgICAgfVxuICAgICAgICAvLyAgICAgfSxcbiAgICAgICAgLy8gICAgIHtcbiAgICAgICAgLy8gICAgICAgICBicmVha3BvaW50OiA4MDAsXG4gICAgICAgIC8vICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgLy8gICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcbiAgICAgICAgLy8gICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxXG4gICAgICAgIC8vICAgICAgICAgfVxuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyBdXG4gICAgfSk7XG5cbiAgICAvLyAkKCcuanMtY2hhbmdpbmctaWNvbnNfX3NsaWRlcicpLnNsaWNrKHtcbiAgICAvLyAgICAgc2xpZGVzVG9TaG93OiAxLFxuICAgIC8vICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAvLyAgICAgZmFkZTogdHJ1ZSxcbiAgICAvLyAgICAgLy8gYXV0b3BsYXk6IHRydWUsXG4gICAgLy8gICAgIC8vIGF1dG9wbGF5U3BlZWQ6IDIwMDAsXG4gICAgLy8gICAgIC8vIGFycm93czogZmFsc2UsXG4gICAgLy8gfSk7XG5cbiAgICAkKCcuanMtY2hhbmdpbmctaWNvbnNfX3NsaWRlcicpLnNsaWNrKHtcbiAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxuICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgICAgYXV0b3BsYXk6IHRydWUsXG4gICAgICAgIGF1dG9wbGF5U3BlZWQ6IDIwMDAsXG4gICAgICAgIGFycm93czogZmFsc2UsXG4gICAgICAgIGZhZGU6IHRydWVcbiAgICB9KTtcblxuXG4gICAgJCgnLmpzLWFkYXB0aXZlX19zbGlkZXInKS5zbGljayh7XG4gICAgICAgIHNsaWRlc1RvU2hvdzogNSxcbiAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICAgIGF1dG9wbGF5OiB0cnVlLFxuICAgICAgICBhdXRvcGxheVNwZWVkOiAxMzAwLFxuICAgICAgICBjc3NFYXNlOiAnZWFzZS1pbi1vdXQnLFxuICAgICAgICBzcGVlZDogOTAwLFxuICAgICAgICBhcnJvd3M6IGZhbHNlLFxuICAgICAgICBjZW50ZXJNb2RlOiB0cnVlLFxuICAgICAgICAvLyBjZW50ZXJQYWRkaW5nOiAnMTAwcHgnLFxuICAgICAgICAvLyBhZGFwdGl2ZUhlaWdodDogdHJ1ZVxuICAgICAgICByZXNwb25zaXZlOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYnJlYWtwb2ludDogOTUwLFxuICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogM1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYnJlYWtwb2ludDogMzMwLFxuICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgIH0pO1xuXG4gICAgLy8qICQyIHRhYnNcblxuICAgIFxuICAgIFxuICAgICQoJy5qcy1jYXNlc19faW1nJykuZXEoMCkuY3NzKCdkaXNwbGF5JywnYmxvY2snKTtcbiAgICAkKCcuanMtY2FzZXNfX2xvZ28nKS5lcSgwKS5hZGRDbGFzcygnYWN0aXZlLXNoYWRvdycpO1xuICAgIFxuICAgICQoJy5qcy1jYXNlc19fbG9nbycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgICAgIHZhciBhID0kKCcuanMtY2FzZXNfX2xvZ28nKS5pbmRleCh0aGlzKTtcbiAgICAgICAgJCgnLmpzLWNhc2VzX19pbWcnKS5jc3MoJ2Rpc3BsYXknLCdub25lJylcbiAgICAgICAgJCgnLmpzLWNhc2VzX19pbWcnKS5lcShhKS5jc3MoJ2Rpc3BsYXknLCdibG9jaycpO1xuICAgICAgICAkKCcuanMtY2FzZXNfX2xvZ28nKS5yZW1vdmVDbGFzcygnYWN0aXZlLXNoYWRvdycpO1xuICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUtc2hhZG93Jyk7XG4gICAgfSk7XG5cbiAgICAvLyogJDMgb25TY3JvbGwgaXBhZCBhbmltYXRpb25cblxuICAgIC8vXG4gICAgLy8gdmFyIGRpc3RhbmNlX3RvX2lwYWQgPSAkKCcuanMtaXBhZCcpLm9mZnNldCgpLnRvcCArICQoJy5qcy1pcGFkJykuaGVpZ2h0KCkqMC44O1xuICAgIC8vIHZhciAkaXBhZEltZyA9ICQoJy5qcy1pcGFkIGltZy5pcGFkJyk7XG4gICAgLy8gdmFyICRpcGFkU2hhZG93ID0gJCgnLmpzLWlwYWQgaW1nLnNoYWRvdycpO1xuICAgIC8vXG4gICAgLy8gJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbigpe1xuICAgIC8vICAgICBpZiAgKCgkKHdpbmRvdykuc2Nyb2xsVG9wKCkgKyAkKHdpbmRvdykuaGVpZ2h0KCkpID4gZGlzdGFuY2VfdG9faXBhZCkge1xuICAgIC8vICAgICAgICAgLy8gY29uc29sZS5sb2coZGlzdGFuY2VfdG9faXBhZClcbiAgICAvLyAgICAgICAgIC8vICRpcGFkSW1nLmFkZENsYXNzKCdpcGFkX19hbmltYXRpb24nKTtcbiAgICAvLyAgICAgICAgICRpcGFkU2hhZG93LmFuaW1hdGUoe29wYWNpdHk6ICcxJ30sIDIxMDApO1xuICAgIC8vICAgICAgICAgJGlwYWRJbWcuYW5pbWF0ZSh7dG9wOiAnMHB4J30sIDIxMDApO1xuICAgIC8vICAgICB9XG4gICAgLy8gfSk7XG4gICAgXG4gICAgXG4gICAgXG4gICAgXG4gICAgZnVuY3Rpb24gc2hvd25FbGVtZW50VGFibGV0KCBuYW1lLCBuZXdfY2xhc3MsIHBlcmNlbnQsIHNjclRvcCwgcmVtb3ZlX3ByZXYsIHJlbW92ZV9jbGFzcyl7XG4gICAgICAgICQoJy4nK25hbWUpLmVhY2goZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGlmKCAoJCh0aGlzKS5vZmZzZXQoKS50b3AgKyAkKHRoaXMpLmhlaWdodCgpKnBlcmNlbnQpICA8IChzY3JUb3AgKyAkKHdpbmRvdykuaGVpZ2h0KCkpICYmICEkKHRoaXMpLmhhc0NsYXNzKG5ld19jbGFzcykgICl7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcyhuZXdfY2xhc3MpO1xuICAgICAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MocmVtb3ZlX2NsYXNzKTtcbiAgICAgICAgICAgICAgICBpZihyZW1vdmVfcHJldil7ICQodGhpcykucmVtb3ZlQ2xhc3MobmFtZSk7IH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHZhciBzY3JvbGxfdG9wX3RhYmxldCA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcbiAgICBzaG93bkVsZW1lbnRUYWJsZXQoJ2FuaW1hdGFibGUnLCAnYW5pbWF0ZWQnLCAwLjgsIHNjcm9sbF90b3BfdGFibGV0LCB0cnVlKTtcbiAgICAkKHdpbmRvdykuYmluZCgnc2Nyb2xsJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgc2Nyb2xsX3RvcF90YWJsZXQgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XG4gICAgICAgIHNob3duRWxlbWVudFRhYmxldCgnYW5pbWF0YWJsZScsICdhbmltYXRlZCcsIDAuOCwgc2Nyb2xsX3RvcF90YWJsZXQsIHRydWUpO1xuICAgIH0pO1xuXG5cbiAgICAvLyAqICQ0IGJlZm9yZSBhZnRlciBlZmZlY3Q/XG5cbiAgICAkKFwiI2NvbnRhaW5lcjFcIikudHdlbnR5dHdlbnR5KCk7XG5cblxuICAgIC8vICogJDUgb25TY3JvbGwgc2xpZGVyIEljb25zIGFuaW1hdGlvblxuXG4gICAgLy9cbiAgICAvLyB2YXIgZGlzdGFuY2VfdG9faXBhZCA9ICQoJy5qcy1pcGFkJykub2Zmc2V0KCkudG9wICsgJCgnLmpzLWlwYWQnKS5oZWlnaHQoKSowLjg7XG4gICAgLy8gdmFyICRpcGFkSW1nID0gJCgnLmpzLWlwYWQgaW1nLmlwYWQnKTtcbiAgICAvLyB2YXIgJGlwYWRTaGFkb3cgPSAkKCcuanMtaXBhZCBpbWcuc2hhZG93Jyk7XG4gICAgLy9cbiAgICAvLyAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKCl7XG4gICAgLy8gICAgIGlmICAoKCQod2luZG93KS5zY3JvbGxUb3AoKSArICQod2luZG93KS5oZWlnaHQoKSkgPiBkaXN0YW5jZV90b19pcGFkKSB7XG4gICAgLy8gICAgICAgICAvLyBjb25zb2xlLmxvZyhkaXN0YW5jZV90b19pcGFkKVxuICAgIC8vICAgICAgICAgLy8gJGlwYWRJbWcuYWRkQ2xhc3MoJ2lwYWRfX2FuaW1hdGlvbicpO1xuICAgIC8vICAgICAgICAgJGlwYWRTaGFkb3cuYW5pbWF0ZSh7b3BhY2l0eTogJzEnfSwgMjEwMCk7XG4gICAgLy8gICAgICAgICAkaXBhZEltZy5hbmltYXRlKHt0b3A6ICcwcHgnfSwgMjEwMCk7XG4gICAgLy8gICAgIH1cbiAgICAvLyB9KTtcbiAgICBcbiAgICBcbiAgICB2YXIgZmlyc3QgPSB0cnVlO1xuICAgIFxuICAgIGZ1bmN0aW9uIHNob3duRWxlbWVudCggbmFtZSwgbmV3X2NsYXNzLCBwZXJjZW50LCBzY3JUb3AsIHJlbW92ZV9wcmV2LCByZW1vdmVfY2xhc3Mpe1xuICAgICAgICAkKCcuJytuYW1lKS5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBpZiggKCQodGhpcykub2Zmc2V0KCkudG9wICsgJCh0aGlzKS5oZWlnaHQoKSpwZXJjZW50KSAgPCAoc2NyVG9wICsgJCh3aW5kb3cpLmhlaWdodCgpKSAmJiAhJCh0aGlzKS5oYXNDbGFzcyhuZXdfY2xhc3MpICApe1xuICAgICAgICAgICAgICAgIHZhciAkdGhpcyA9ICQodGhpcyk7XG4gICAgICAgICAgICAgICAgaWYgKGZpcnN0KSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcuJytuYW1lKS5hZGRDbGFzcyhuZXdfY2xhc3MpXG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcuJytuYW1lKS5yZW1vdmVDbGFzcyhyZW1vdmVfY2xhc3MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYocmVtb3ZlX3ByZXYpeyAkKCcuJytuYW1lKS5yZW1vdmVDbGFzcyhuYW1lKTsgfVxuICAgICAgICAgICAgICAgICAgICB9LCAxMDAwMCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzdGFydCBhdXRvcGxheScpO1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuc2xpZGVyRm9yQXV0b3BsYXkuc2xpY2soJ3NsaWNrU2V0T3B0aW9uJywgJ2F1dG9wbGF5JywgdHJ1ZSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5zbGlkZXJGb3JBdXRvcGxheS5zbGljaygnc2xpY2tQbGF5Jyk7XG4gICAgICAgICAgICAgICAgICAgIGZpcnN0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgXG4gICAgXG4gICAgLy9jb25zb2xlLmxvZyhzY3JvbGxfdG9wKTtcbiAgICAvL3Nob3duRWxlbWVudCgnc3RhdGljJywgJ29ucGxheScsIDEsIHNjcm9sbF90b3AsIHRydWUpO1xuICAgICQod2luZG93KS5iaW5kKCdzY3JvbGwnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICB2YXIgc2Nyb2xsX3RvcCA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcbiAgICAgICAgc2hvd25FbGVtZW50KCdoaWRkZW4nLCAndmlzaWJsZScsIDEsIHNjcm9sbF90b3AsIHRydWUpO1xuICAgIH0pO1xuICAgIFxuICAgIFxuICAgIC8vICQoJy5qcy1pY29uX19zbGlkZXInKS5zY3JvbGwoZnVuY3Rpb24oKXsgLy93aHkgZG9lc24ndCB3b3JrP1xuICAgIC8vXG4gICAgLy8gICAgICQoJy5qcy1pY29uX19zbGlkZXInKS5zbGljayh7XG4gICAgLy8gICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXG4gICAgLy8gICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAvLyAgICAgICAgIGF1dG9wbGF5OiB0cnVlLFxuICAgIC8vICAgICAgICAgYXV0b3BsYXlTcGVlZDogMjAwMCxcbiAgICAvLyAgICAgICAgIGFycm93czogZmFsc2UsXG4gICAgLy8gICAgICAgICByZXNwb25zaXZlOiBbXG4gICAgLy8gICAgICAgICAgICAge1xuICAgIC8vICAgICAgICAgICAgICAgICBicmVha3BvaW50OiAxMjgwLFxuICAgIC8vICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMlxuICAgIC8vICAgICAgICAgICAgICAgICB9XG4gICAgLy8gICAgICAgICAgICAgfSxcbiAgICAvLyAgICAgICAgICAgICB7XG4gICAgLy8gICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDgwMCxcbiAgICAvLyAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDFcbiAgICAvLyAgICAgICAgICAgICAgICAgfVxuICAgIC8vICAgICAgICAgICAgIH1cbiAgICAvLyAgICAgICAgIF1cbiAgICAvLyAgICAgfSk7XG4gICAgLy9cbiAgICAvLyB9KTtcblxuICAgIC8vICogJDYgV293SnNcblxuICAgIG5ldyBXT1coKS5pbml0KCk7XG5cblxuXG5cblxufSk7Il0sImZpbGUiOiJjb21tb24uanMifQ==
