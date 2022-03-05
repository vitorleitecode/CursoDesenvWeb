<?php
class Adulto {
private $peso;

public function getPeso() {
return $this->peso;
}
public function setPeso($peso) {
    $this->peso = $peso;
}
 public function engordar($quilos) {
    $this->peso += $quilos;
}
 public function emagrecer($quilos) {
        $this->peso -= $quilos;
}
}