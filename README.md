# Final Evaluation JavaScript (Adalab)
Hey! Here I am, writing my first functional website made of JS, Scss and HTML.

In this website you can find your favorite Tv Shows by just typing the name in the input field, and clicking on "Search" button. Then... magic happens! You will see filtered by name Tv Shows, even though if you haven't type the complete name or made a typo. After reviewing all the items, you can select them as favorites. Once you click on the item, it will appear on the left side of your window, in the "My favorite Tv Shows" list. That's useful if you want to store them for later.

# Implemented functions:
The website uses an external API, which I get by using AJAX (or fetch function). Every time we type something in the input field, we make a request to the external API and it sends us a filtered information related to the input.
Additionally, a Local Storage is implemented to store all the needed information. In case of refreshing the website, we will still keep the favorite options for further usage.
We can select and deselect any time by clicking on the Tv Show item.
The styles were not the important part of this evaluation, but the JS functionality.
