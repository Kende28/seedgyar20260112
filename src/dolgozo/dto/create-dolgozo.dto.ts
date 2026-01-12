import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString, Max, Min } from "class-validator"

export class CreateDolgozoDto {
    @IsNotEmpty()
    @IsString()
    csaladnev: string
    
    @IsNotEmpty()
    @IsString()
    utonev: string
    
    @IsNumber()
    @IsNotEmpty()
    @Min(18)
    @Max(65)
    kor: number
    
    @IsOptional()
    @IsString()
    nem: string
    
    @IsOptional()
    @IsString()
    munkaterulet: string
    
    @IsOptional()
    @IsBoolean()
    otthon_dolgozik: boolean = false 
}
