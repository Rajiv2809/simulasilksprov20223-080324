<?php 

namespace App\Traits;

trait ResponseHttpStatus {
    protected function success($message, $status = 200){
        return response()->json($message, $status);
    }
    protected function createSuccess($message , $status = 200){
        return response()->json($message, $status);
    }
    protected function updateSuccess($message = 'update success', $status = 200){
        return response()->json([
            'message' => $message
        ], $status);
    }
    protected function deleteSuccess($message  = 'delete success', $status = 200){
        return response()->json([
            'message' => $message
        ], $status);
    }
    protected function notFound($message = 'data not found', $status = 404){
        return response()->json([
            'message' => $message
        ], $status);
    }
    protected function unauthenticate($message, $status = 401){
        return response()->json([
            'message' => $message
        ],$status);
    }
}