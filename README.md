# beehive-ansible

https://github.com/cjimti/iotwifi

```

raspi-config --expand-rootfs
sudo apt update
sudo apt dist-upgrade
sudo apt upgrade

sudo systemctl mask wpa_supplicant.service
sudo pkill wpa_supplicant

curl -fsSL "https://download.docker.com/linux/raspbian/gpg" | apt-key add -
echo "deb [arch=armhf] https://download.docker.com/linux/raspbian stretch edge" > /etc/apt/sources.list.d/docker.list
apt-get update
apt-get install -y --no-install-recommends docker-ce

curl -sSL https://get.docker.com | sh
sudo usermod -aG docker pi
sudo reboot

docker run -d \
  -p 9000:9000 \
  -v /var/run/docker.sock:/var/run/docker.sock \
  --restart unless-stopped \
  --name portainer \
  portainer/portainer

docker pull cjimti/iotwifi
wget https://raw.githubusercontent.com/cjimti/iotwifi/master/cfg/wificfg.json

docker run \
  -d \
  --privileged \
  --net host \
  -v $(pwd)/wificfg.json:/cfg/wificfg.json \
  --restart unless-stopped \
  --name iotwifi \
  cjimti/iotwifi

```