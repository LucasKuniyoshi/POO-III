import Engine from "../components/Engine";
import Transmission from "../components/Transmission";
import VehicleType from "../components/VehicleType";
import Wheel from "../components/Wheel";

export default class Vehicle{

    private _vehicleType: VehicleType;
    private _seats : number;
    private _engine : Engine;
    private _transmission: Transmission;
    private _wheel : Wheel[] = []; //inicializa o array

    /**
     * Getter vehicle
     * @return {VehicleType}
     */
	public get vehicleType(): VehicleType {
		return this._vehicleType;
	}

    /**
     * Getter seats
     * @return {number}
     */
	public get seats(): number {
		return this._seats;
	}

    /**
     * Getter engine
     * @return {Engine}
     */
	public get engine(): Engine {
		return this._engine;
	}

    /**
     * Getter transmission
     * @return {Transmission}
     */
	public get transmission(): Transmission {
		return this._transmission;
	}

    /**
     * Getter wheel
     * @return {Wheel[]}
     */
	public get wheel(): Wheel[] {
		return this._wheel;
	}

    public addWheel(wheel: Wheel){
        this._wheel.push(wheel)
    }

    /**
     * Setter vehicle
     * @param {VehicleType} value
     */
	public set vehicleType(value: VehicleType) {
		this._vehicleType = value;
	}

    /**
     * Setter seats
     * @param {number} value
     */
	public set seats(value: number) {
		this._seats = value;
	}

    /**
     * Setter engine
     * @param {Engine} value
     */
	public set engine(value: Engine) {
		this._engine = value;
	}

    /**
     * Setter transmission
     * @param {Transmission} value
     */
	public set transmission(value: Transmission) {
		this._transmission = value;
	}

    /**
     * Setter wheel
     * @param {Wheel[]} value
     */
	public set wheel(value: Wheel[]) {
		this._wheel = value;
	}
}