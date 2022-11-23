
export function descriptionSelect(DescriptionBody) {
    const descriptionSelect = [] 
    let cropInit = DescriptionBody?.replace('<span data-mce-fragment="1">', '');
    let cropEnd = cropInit?.replace('</span>', '');
    descriptionSelect.push(cropEnd);
    return descriptionSelect;
}



