<?php

namespace App\Http\Controllers;

use App\Models\Penjualan;
use Illuminate\Http\Request;
use App\Traits\ResponseHttpStatus;
use App\Http\Requests\PenjualanRequest;
use App\Http\Requests\UpdatePenjualanRequest;
use PDF;
class PenjualanController extends Controller
{
    use ResponseHttpStatus;
    public function addData(PenjualanRequest $request){
        $data = $request->all();
        $data['total'] = $request->qty  * $request->hargajual;
        $data['kembali'] = $request->dibayar - $request['total'];
        $penjualan = Penjualan::create($data);
        return $this->createSuccess([
            'message' => 'create success',
            "id" => $penjualan->IDTrans
        ]);
    }
    public function allData(){
        $data = Penjualan::all();
        return $this->success($data);

    }
    public function getData($id){
        $data = Penjualan::find($id);
        if(!$data){
            return $this->notFound();
        }
        return $this->success($data);
    }
    public function updateData($id, UpdatePenjualanRequest $request){
        $data = Penjualan::find($id);
        if (!$data) {
            return $this->notFound();
        }
        $data->update($request->all());
        
        return $this->updateSuccess();
    }
    public function deleteData($id){
        $data = Penjualan::find($id);
        if (!$data) {
            return $this->notFound();
        }
        $data->delete();
        return $this->deleteSuccess();
    }
    public function struk($id) {
        $penjualan = Penjualan::find($id);
        
        $pdf = PDF::loadview('Struk',['penjualan'=>$penjualan]);
        return $pdf->download('struk.pdf');
    }
}   
