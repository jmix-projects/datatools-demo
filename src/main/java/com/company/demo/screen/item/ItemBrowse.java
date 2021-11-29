package com.company.demo.screen.item;

import io.jmix.ui.screen.*;
import com.company.demo.entity.Item;

@UiController("Item.browse")
@UiDescriptor("item-browse.xml")
@LookupComponent("itemsTable")
public class ItemBrowse extends StandardLookup<Item> {
}