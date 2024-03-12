<?php

namespace App\Http\Controllers;

use App\Models\Tenant;
use Illuminate\Http\Request;
use App\Traits\ResponseHttpStatus;
use App\Http\Requests\TenantRequest;
use App\Http\Requests\UpdateTenantRequest;

class TenantController extends Controller
{
    use ResponseHttpStatus;
    public function addData(TenantRequest $request){
        $data = $request->all();
        Tenant::create($data);
        return $this->createSuccess([
            'message' => 'create success',
        ]);
    }
    public function allData(){
        $data = Tenant::all();
        return $this->success($data);

    }
    public function getData($id){
        $data = Tenant::find($id);
        if(!$data){
            return $this->notFound();
        }
        return $this->success($data);
    }
    public function updateData($id, UpdateTenantRequest $request){
        $data = Tenant::find($id);
        if (!$data) {
            return $this->notFound();
        }
        $data->update($request->all());
        
        return $this->updateSuccess();
    }
    public function deleteData($id){
        $data = Tenant::find($id);
        if (!$data) {
            return $this->notFound();
        }
        $data->delete();
        return $this->deleteSuccess();
    }
}
