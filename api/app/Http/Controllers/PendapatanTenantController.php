<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\PendapatanTenant;
use App\Traits\ResponseHttpStatus;
use App\Http\Requests\PendapatanRequest;
use App\Http\Requests\UpdatePendatapatanRequest;

class PendapatanTenantController extends Controller
{
    use ResponseHttpStatus;
    public function addData(PendapatanRequest $request){
        $data = $request->all();
        $data['setoranTenant'] = $request->totalPendapatan   * (15/100);
        PendapatanTenant::create($data);
        return $this->createSuccess();
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
}
