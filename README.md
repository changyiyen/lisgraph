# lisgraph

## UPDATE: This tool has been (partially) superseded by LIS page built-in tools
So about 2 months after this tool was first created (early 2017), the NCKUH LIS pages added a mechanism where one could check boxes to select which lab items to create time graphs for, and also download the lab values in a nice Excel spreadsheet or a CSV file. Its only main drawback is that it is limited to graphing at most 3 items at once, and that one cannot create custom values (e.g., AST/ALT ratio, BUN/Cr ratio...). As such, this tool is now considered to be partially superseded.

## Bookmarklet and scripts to dynamically add graphs to the LIS pages at NCKUH
This repository contains lisgraph.js and a bookmarklet, both of which were written as a small toolset to enable employees at National Cheng Kung University Hospital to dynamically add graphs to the webpage containing lab data for a given patient (that is, the LIS, or laboratory information system, webpage). Thus, note that this toolset is unlikely to be of use to users outside of NCKUH.

Due to the design employed by the webpage (which involves forcing Internet Explorer into IE8 emulation mode, thus rendering Chart.js unusable), this tool does *not* work on Internet Explorer. However, it has been tested to work on Google Chrome on Windows 7 and Iceweasel/Firefox on Xubuntu 16.04.

This tool is legally placed under the MIT Licence. However, I strongly discourage the use of this tool by the Neurology and Obstetrics & Gynecology departments. Thanks for being dicks, guys. If you *do* use this tool however, you will get nothing more from me than utter resentment.

To use this tool, the user only needs to put the contents of the bookmarklet into a bookmark on Chrome or Firefox. As this tool currently only works on the biochemical data subpage, please activate the bookmarklet only after you have reached that page.
Once the biochemical data subpage has been reached, clicking the bookmarklet will generate buttons on the bottom of the right viewing pane. Clicking the relevant buttons will add time-based graphs of certain items to the bottom of the page (currently AST, ALT, BUN, creatinine, eGFR, sodium and potassium).
