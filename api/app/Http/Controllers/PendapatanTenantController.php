<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\PendapatanTenant;
use App\Traits\ResponseHttpStatus;
use App\Http\Requests\PendapatanRequest;
use App\Http\Requests\UpdatePendatapatanRequest;
use App\Models\Penjualan;
use PDF;
class PendapatanTenantController extends Controller
{
    use ResponseHttpStatus;
    public function addData(PendapatanRequest $request){
        $data = $request->all();
        $data['setoranTenant'] = $request->totalPendapatan   * (15/100);
        $pendapatan = PendapatanTenant::create($data);
        return $this->createSuccess([
            'message' => 'create success',
            'id' => $pendapatan->IDpendapatan
        ]);
    }
    public function allData(){
        $data = PendapatanTenant::all();
        return $this->success($data);

    }
    public function getData($id){
        $data = PendapatanTenant::find($id);
        if(!$data){
            return $this->notFound();
        }
        return $this->success($data);
    }
    public function updateData($id, UpdatePendatapatanRequest $request){
        $data = PendapatanTenant::find($id);
        $data['setoranTenant'] = $request->totalPendapatan  * (15/100);
        if (!$data) {
            return $this->notFound();
        }
        $data->update($request->all());
        
        return $this->updateSuccess();
    }
    public function deleteData($id){
        $data = PendapatanTenant::find($id);
        if (!$data) {
            return $this->notFound();
        }
        $data->delete();
        return $this->deleteSuccess();
    }
    public function kwitansi($id){
        $pendapatan = PendapatanTenant::find($id);
        if (!$pendapatan) {
            return $this->notFound();
        }
        $pdf = PDF::loadview('Kwitansi',['pendapatan'=>$pendapatan]);
        return $pdf->download('kwtansi.pdf');

    }
    
}
