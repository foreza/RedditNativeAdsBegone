# RedditNativeAdsBegone


## Premise

 This project is aimed mainly at hiding native ads from reddit (web view)
Although ads are needed to generate revenue, native ads are not honest / blend into the background.
To combat this, we have a variety of ways.

## Implementation

This project will firstly be a bookmarklet (easiest approach) which will inject jQuery, and then remove any DOM elements that have any sort of indication that the content is in fact an advertisement.
Later, we plan to improve upon this and convert this to different extensions while fine tuning it to not just remove the elements themselves, but never even let them load.

## BOOKMARKLET SETUP INSTRUCTIONS

* Make a new bookmark
* Name it whatever you want
* In the URL, copy + paste the contents of bookmarklet/removeAdsReddit.js" 
* Hit save
* Next time you go on Reddit, click the bookmark and voila!
