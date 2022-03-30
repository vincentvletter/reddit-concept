function titleToLong(title) {
    if (title.length > 100)
    {
        return title.substring(0, 101) + "...";
    }
    else
    {
        return title;
    }
}

export default titleToLong;