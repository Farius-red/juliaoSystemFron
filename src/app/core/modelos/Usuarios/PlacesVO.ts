export interface DetailsAddressVO{
    idDetailsAddress:number,
    addres:string,
    property_Type:Property_TypeVO,
    property_type_specification:string,
    country:CountryVO
    
   }

export interface Property_TypeVO{
 idProperty_Type:number,
 nameProperty_type:string,
}

export interface CountryVO{
    idCoutry:number,
    nameCountry:string
    
}

export interface CityVO{
    idCity:number,
    nameCity:string
}