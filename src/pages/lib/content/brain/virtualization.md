---
title: "Virtualization"
---

## VM's

VM stands for Virtual Machine, so VM's are Virtual Machines that has access to a portion of hardware resources to execute. They have their own OS and cannot access processes or resources outside of what's defined. And what defines it???

## Hypervisor

It is a piece of software that coordinates VM's. It serves as an interface between the VM's and the hardware. Ensuring the access to the physical resources it needs to execute. It is also what ensure that the VM's don't interfere with each other by impinging on each other’s memory space or compute cycles.

### Types of Hypervisors

#### Type 1 or "Bare-metal" Hypervisors

It takes the place of the host OS and interacts directly with the physical resources (cpu, memory, etc), that's why they're called "bare-metal". They're highly efficient.

#### Type 2

Those run as an application on the host OS. They carry performance overhead, since they have to use the host OS to access and coordinate the physical resources.

## Types of Virtualization

- Desktop virtualization
- Network virtualization
- Storage virtualization
- Data virtualization
- Application virtualization
- Data center virtualization
- CPU virtualization
- GPU virtualization
- Linux virtualization
- Cloud virtualization

### Desktop virtualization

Desktop virtualization lets you run multiple desktop operating systems, each in its own VM on the same computer.

### Network virtualization

It uses a software to create a "view" of the network that can be used to manage the network from a single console. It also hardware elements and funcitons (e.g., connections, switches, routers, etc). So you can modify and control those elements without having to touch the underlying physical components.

### Storage Virtualization

Allows all the storage devices to be viewed as a single, large storage device. It creates a single storage pool that can be assigned to any VM on the network.

### Application virtualization

Application virtualization runs application software without installing it directly on the user’s OS. There are three types of application virtualization:

- **Local application virtualization**: The entire application runs on the endpoint device but runs in a runtime environment instead of on the native hardware.
- **Application streaming**: The application lives on a server which sends small components of the software to run on the end user's device when needed.
- **Server-based application virtualization** The application runs entirely on a server that sends only its user interface to the client device.

### CPU virtualization

CPU (central processing unit) virtualization is the fundamental technology that makes hypervisors, virtual machines, and operating systems possible. It allows a single CPU to be divided into multiple virtual CPUs for use by multiple VMs.

### GPU virtualization

A GPU (graphical processing unit) is a special multi-core processor that improves overall computing performance by taking over heavy-duty graphic or mathematical processing. GPU virtualization lets multiple VMs use all or some of a single GPU’s processing power for faster video, artificial intelligence (AI), and other graphic- or math-intensive applications.

- **Pass-through GPUs** make the entire GPU available to a single guest OS. (that's amazing for gaming)
- **Shared vGPUs** divide physical GPU cores among several virtual GPUs (vGPUs) for use by server-based VMs.

### Linux virtualization

Linux includes its own hypervisor, called the kernel-based virtual machine (KVM), which supports Intel and AMD’s virtualization processor extensions so you can create x86-based VMs from within a Linux host OS.

As an open source OS, Linux is highly customizable. You can create VMs running versions of Linux tailored for specific workloads or security-hardened versions for more sensitive applications.

## Virtualization VS Containerization

### Containerization

What paved the way for containerization was **cgroups**, which is a Linux kernel feature that limits, accounts for, and isolates the resource usage of a collection of processes.

### Apps With VM's

- Each VM has its own OS
- You also need the hypervisor
- So to have an application running on a VM, you need to add, besides the host OS, the guest OS and the application
- Because you're running a VM in your host OS, in order to deploy to prodution, you might face compatibility issues
- The left amount of resources are not shared between the VM's, you need to specify how much resources each VM will have

### Apps With containers

- You need a manifest -> to create an image -> to create a container (with all the dependencies needed to run the application)
- You need the host OS
- You need the container runtime
- With containers, you don't need guest OS, you just have the actual application and its dependencies, so it's much more lightweight and easier to scale
- The left amount of resources are shared between the containers, so it's more efficient

## References

- [What is Virtualization - IBM](https://www.ibm.com/topics/virtualization)
