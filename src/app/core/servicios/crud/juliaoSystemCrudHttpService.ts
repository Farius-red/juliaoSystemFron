import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import * as ɵngcc0 from '@angular/core';
import { JuliaoSystemBaseHttpService } from "./juliaoSystemBaseHttpService";
import { JuliaSystemPaginacion } from "./JuliaoSystemPaginacion";

export declare class JuliaoSystemCrudHttpService<T> extends JuliaoSystemBaseHttpService {
    protected http: HttpClient;
    basePathUrl: string;
    constructor(http: HttpClient);
    findByName(itemId:string): Promise<T>;
    findById(itemId: string): Observable<T>;
    save(item: T): Promise<T>;
    saveOb(item: T): Observable<T>;
    list(idCompany:String ): Promise<JuliaSystemPaginacion<T>>;
    all(): Promise<JuliaSystemPaginacion<T>>;
    remove(itemId: number): Promise<boolean>;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<JuliaoSystemCrudHttpService<any>, never>;
}