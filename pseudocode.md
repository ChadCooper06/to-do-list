# PseudoCode To Do List App

create app
install react
delete unnecessary things like the react logo
create the components

## Components

* App
    * this holds the overall state of the app
    * displays the current page of the app (out of 3, maybe 4)
    * initially displays as blank if nothing has been input
    * stores the to do list and the status of each individual to do in state
    _Structure_
    * INPUT box
    * rendered list of to-do items
    * buttons to switch between the three pages
    * current count of items that are not completed
    * clear completed button

    - INPUT box
        - takes in keyboard input and then sends that info (as an object) to the State(app) and local storage
        - uses an onSubmit to take the value, turn it into an object and set it to state, conditional render to the screen
        - the new item is given a unique ID and added to the item array of state
        - the input box becomes cleared upon submit
    - ITEM BOX
        -shows to do items
            -TO DO- individual component- each has:
                - checkbox
                - label (value from INPUT)
                - unique ID given by function for local storage
                - status of done or not done
    - STATUS BUTTONS
        - onClick causes conditional render of the visible aspect (item list) and changes the ones that are visible
            - clicking all shows everything at once
            - clicking done shows the ones that are finished
            - clicking incomplete shows the ones that are not finished
    - COUNTER
        - shows the current # of incomplete items in the list
    - CLEAR BUTTON
        - clears the entire ITEM BOX and resets STATE to the original null value

- setState-- occurs on each click or each submit of the input box
    -- item array [ each item is a unique id and can be added or removed from this list ]
- 