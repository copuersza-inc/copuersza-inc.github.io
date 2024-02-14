function toggleItem(itemId) {
    var item = document.getElementById(itemId);
    if (item.style.maxHeight) {
        item.style.maxHeight = null;
    } else {
        // Cerrar todos los demás elementos antes de abrir el actual
        var allItems = document.querySelectorAll('.list-subitems');
        allItems.forEach(function (el) {
            if (el.id !== itemId) {
                el.style.maxHeight = null;
            }
        });

        item.style.maxHeight = item.scrollHeight + "px";
    }
}