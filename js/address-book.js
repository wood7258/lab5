/* address-book.js
    this is where you will add your JavaScript to complete Lab 5
*/

$(function() {
	var eEntries = Employees.entries;
    sortObjArray(eEntries, 'last');
    render(eEntries);
	$('.sort-ui .btn').click(function() {
		var sortBtn = $(this);
		sortObjArray(eEntries, sortBtn.attr('data-sortby'));
		sortBtn.siblings('.active').removeClass('active');
		sortBtn.addClass('active');
		render(eEntries);
	});
    $('.sort-ui .btn').popover({
        content: function() {
			return 'Click to Resort by ' + $(this).html();
		},
        container: 'body',
        trigger: 'hover',
        placement: 'bottom'
    });
});

function render(entries) {
    var template = $('.template');
    var abook = $('.address-book');
	abook.hide();
    abook.empty();
    $.each(entries, function() {
        var abookline = template.clone();
        for (prop in this) {
            if (prop === 'pic') {
                abookline.find('.pic').attr({
					src: this[prop],
					alt: 'Picture of ' + this['first'] + ' ' + this['last']
				});
            }
            else {
                abookline.find('.' + prop).html(this[prop]);
            }
        }
        abookline.removeClass('template');
        abook.append(abookline);
    });
	abook.fadeIn(1000);
}

/* sortObjArray()
    sorts an array of objects by a given property name
    the property values are compared using standard 
    operators, so this will work for string, numeric,
    boolean, or date values

    objArray        array of objects to sort
    propName        property name to sort by

    returns undefined (array is sorted in place)
*/
function sortObjArray(objArray, propName) {
    if (!objArray.sort)
        throw new Error('The objArray parameter does not seem to be an array (no sort method)');

    //sort the array supplying a custom compare function
    objArray.sort(function(a,b) {
        
        //note: this compares only one property of the objects
        //see the optional step where you can add support for 
        //a secondary sort key (i.e., sort by another property)
        //if the first property values are equal
        if (a[propName] < b[propName])
            return -1;
        else if (a[propName] === b[propName])
            return 0;
        else
            return 1;
    });
} //sortObjArray()

