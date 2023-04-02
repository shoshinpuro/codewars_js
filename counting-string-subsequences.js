let countSubsequences = (needle,  haystack , hLength = haystack.length, nLength = needle.length) => {
    if ((hLength == 0 && nLength == 0) || nLength == 0) return 1;
    if (hLength == 0) return 0;
    if (haystack[hLength - 1] == needle[nLength - 1]) return countSubsequences(needle, haystack, hLength - 1, nLength - 1) + countSubsequences(needle, haystack, hLength - 1, nLength);
    else return countSubsequences(needle, haystack, hLength - 1, nLength);
}