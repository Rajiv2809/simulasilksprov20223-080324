<?php

namespace App\Http\Controllers;

use App\Models\Stok;

use App\Http\Requests\StokRequest;
use App\Http\Requests\UpdateStokRequest;
use App\Traits\ResponseHttpStatus;

class StokController extends Controller
{
    use ResponseHttpStatus;
    public function addData(StokRequest $request){
        $data = $request->all();
        Stok::create($data);
        return $this->createSuccess();
    }
    public function allData(){
        $data = Stok::all();
        return $this->success($data);

    }
    public function getData($id){
        $data = Stok::find($id);
        if(!$data){
            return $this->notFound();
        }
        return $this->success($data);
    }
    public function updateData($id, UpdateStokRequest $request){
        $data = Stok::find($id);
        if (!$data) {
            return $this->notFound();
        }
        $data->update($request->all());
        
        return $this->updateSuccess();
    }
    public function deleteData($id){
        $data = Stok::find($id);
        if (!$data) {
            return $this->notFound();
        }
        $data->delete();
        return $this->deleteSuccess();
    }
}
