/*
 * @Author: Your name
 * @Date:   2023-07-03 18:39:02
 * @Last Modified by:   Your name
 * @Last Modified time: 2023-07-03 20:58:36
 */
$(document).ready(function() {
    // Retrieve item details from URL parameters
    var urlParams = new URLSearchParams(window.location.search);
    var itemName = urlParams.get('name');
    var description = urlParams.get('description');
    var itemType = urlParams.get('type');
  
    
    // Convert item type icon to text
    var itemTypeText = getItemTypeText(itemType);
  
    
    // Display item details on the page
    var itemDetailsDiv = $('#item-details');
    itemDetailsDiv.append($('<p>').addClass('item-name').text('Item Name:   ' + itemName));
    itemDetailsDiv.append($('<p>').addClass('Description').text('Description: ' + description));
    itemDetailsDiv.append($('<p>').addClass('Item_Type').text('Item Type:   ' + itemTypeText));
  });
  
  
  // Function to convert item type icon to text
  function getItemTypeText(itemType) {
    if (itemType === '<i class="bi bi-box"></i>') {
      return 'Object';
    } else if (itemType === '<i class="bi bi-basket-fill"></i>') {
      return 'Container';
    }
    return '';
  }


  
  